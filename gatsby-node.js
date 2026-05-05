const fs = require(`fs`)
const path = require(`path`)
const crypto = require(`crypto`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const sortBy = require(`lodash/sortBy`)

let basePath
let contentPath

const CourseTemplate = require.resolve(`./src/templates/coursePage`)
const CoursesTemplate = require.resolve(`./src/templates/coursesPage`)
const LessonTemplate = require.resolve(`./src/templates/lessonPage`)

exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState()

  basePath = themeOptions.basePath || `/`
  contentPath = themeOptions.contentPath || `content/courses`

  const dirs = [path.join(program.directory, contentPath)]
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
  })
}

const mdxResolverPassthrough = fieldName => async (source, args, context, info) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById(source.parent)
  if (!mdxNode) return null
  const resolver = type.getFields()[fieldName]
  if (!resolver || !resolver.resolve) return null
  const result = await resolver.resolve(mdxNode, args, context, { fieldName })
  return result
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions

  createTypes(
    schema.buildObjectType({
      name: `Lesson`,
      fields: {
        id: { type: `ID!` },
        title: { type: `String!` },
        slug: { type: `String!` },
        youtubeId: { type: `String` },
        duration: { type: `Int` },
        contentFilePath: { type: `String` },
        excerpt: {
          type: `String`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 140,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        frontmatter: {
          type: `MdxFrontmatter`,
          resolve: mdxResolverPassthrough(`frontmatter`),
        },
        premium: {
          type: `String`,
          resolve: async (source, args, context) => {
            const { entries } = await context.nodeModel.findAll({ type: `Course` })
            const courses = Array.from(entries)
            const courseSlug = `/${
              source.slug.split(`/`)[source.slug.split(`/`).length - 3]
            }/`
            const course = courses.find(c => c.slug === courseSlug)
            return course ? course.premium : null
          },
        },
      },
      interfaces: [`Node`],
    })
  )

  createTypes(
    schema.buildObjectType({
      name: `Course`,
      fields: {
        id: { type: `ID!` },
        title: { type: `String!` },
        slug: { type: `String!` },
        lastUpdated: { type: `Date`, extensions: { dateformat: {} } },
        tags: { type: `[String]!` },
        premium: { type: `String` },
        contentFilePath: { type: `String` },
        excerpt: {
          type: `String`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 180,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        frontmatter: {
          type: `MdxFrontmatter`,
          resolve: mdxResolverPassthrough(`frontmatter`),
        },
        lessons: {
          type: `[Lesson!]`,
          resolve: async (source, args, context) => {
            const { entries } = await context.nodeModel.findAll({ type: `Lesson` })
            const lessons = Array.from(entries)
            return sortBy(
              lessons.filter(lesson => lesson.slug.startsWith(source.slug)),
              [`slug`]
            )
          },
        },
        coverImage: {
          type: `File`,
          extensions: { fileByRelativePath: {} },
        },
      },
      interfaces: [`Node`],
    })
  )
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      site {
        siteMetadata {
          title
        }
      }
      allCourse(sort: [{ lastUpdated: ASC }, { title: ASC }]) {
        edges {
          node {
            id
            title
            slug
            premium
            contentFilePath
            lessons {
              id
              title
              slug
              duration
              contentFilePath
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const {
    allCourse,
    site: { siteMetadata },
  } = result.data
  const courses = allCourse.edges
  const { title: siteTitle } = siteMetadata

  courses.forEach(({ node: course }, i) => {
    const nextCourse = i === courses.length - 1 ? null : courses[i + 1]
    const previousCourse = i === 0 ? null : courses[i - 1]
    const { slug, lessons, premium, contentFilePath } = course

    createPage({
      path: slug,
      component: contentFilePath
        ? `${CourseTemplate}?__contentFilePath=${contentFilePath}`
        : CourseTemplate,
      context: {
        id: course.id,
        course,
        previousCourse,
        nextCourse,
        premium,
      },
    })

    lessons.forEach((lesson, j) => {
      const nextLesson = j === lessons.length - 1 ? null : lessons[j + 1]
      const previousLesson = j === 0 ? null : lessons[j - 1]
      createPage({
        path: lesson.slug,
        component: lesson.contentFilePath
          ? `${LessonTemplate}?__contentFilePath=${lesson.contentFilePath}`
          : LessonTemplate,
        context: {
          id: lesson.id,
          lesson,
          currentCourse: course,
          previousLesson,
          nextLesson,
          premium,
        },
      })
    })
  })

  createPage({
    path: basePath,
    component: CoursesTemplate,
    context: {
      siteTitle,
    },
  })
}

exports.onCreateNode = ({ node, actions, getNode, createNodeId }) => {
  const { createNode, createParentChildLink } = actions

  if (node.internal.type !== `Mdx`) {
    return
  }

  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  if (source !== contentPath) {
    return
  }

  if (fileNode.name === `index`) {
    const slug = createFilePath({
      node: fileNode,
      getNode,
      basePath: contentPath,
    })
    const fieldData = {
      title: node.frontmatter.title,
      tags: node.frontmatter.tags || [],
      lastUpdated: node.frontmatter.lastUpdated,
      coverImage: node.frontmatter.coverImage,
      premium: node.frontmatter.premium,
      slug,
      contentFilePath: fileNode.absolutePath,
    }
    createNode({
      ...fieldData,
      id: createNodeId(`${node.id} >>> Course`),
      parent: node.id,
      children: [],
      internal: {
        type: `Course`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(fieldData))
          .digest(`hex`),
        content: JSON.stringify(fieldData),
        description: `Courses`,
      },
    })
    createParentChildLink({ parent: fileNode, child: node })
  } else {
    const slug = createFilePath({
      node: fileNode,
      getNode,
      basePath: contentPath,
    })
    const { title, youtubeId, duration } = node.frontmatter
    const fieldData = {
      title,
      duration: duration || 1000,
      youtubeId,
      slug,
      contentFilePath: fileNode.absolutePath,
    }
    createNode({
      ...fieldData,
      id: createNodeId(`${node.id} >>> Lesson`),
      parent: node.id,
      children: [],
      internal: {
        type: `Lesson`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(fieldData))
          .digest(`hex`),
        content: JSON.stringify(fieldData),
        description: `Lessons`,
      },
    })
    createParentChildLink({ parent: fileNode, child: node })
  }
}

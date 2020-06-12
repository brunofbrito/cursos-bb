import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import durationInText from "../utils/durationInText"
import { useAppValue } from "../context/AppContext"
import { usePageValue } from "../context/PageContext"

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  max-height: 300px;
  overflow-y: auto;
  li {
    margin: 0;
    border-bottom: none;
    border-bottom: 1px solid #e7e7e7;
    &:last-child {
      border-bottom: none;
    }
  }
  .active p {
    color: var(--dark-grey);
    font-weight: 700;
    &:hover {
      color: var(--dark-grey);
    }
  }
  p:hover {
    color: var(--accent);
  }
`
const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: var(--dark-grey);
    margin: 0;
    font-size: 1.25rem;
    padding: 1rem;
  }
  p.lessonTitle {
    transition: all 200ms;
    &[data-watched="true"] {
      color: var(--grey);
      &:hover {
        color: var(--accent);
      }
    }
  }
  small {
    color: var(--dark-grey);
    &[data-watched="true"] {
      color: var(--grey);
    }
  }
`

function VideoList({ className }) {
  const [{ watched }] = useAppValue()
  const { currentCourse } = usePageValue()
  const { lessons } = currentCourse
  return (
    <List className={className}>
      {/* TODO: creating skeleton */}

      {lessons &&
        lessons.map((lesson, index) => {
          const lessonWatched = !!watched[lesson.id]
          return (
            <li key={lesson.slug}>
              <Link to={lesson.slug} activeClassName="active">
                <ListItem>
                  <p className="lessonTitle" data-watched={lessonWatched}>
                    {lessonWatched ? "✓ " : ""}
                    {`${index + 1}. ${lesson.title}`}
                  </p>
                  <p>
                    <small data-watched={lessonWatched}>
                      {durationInText(lesson.duration)}
                    </small>
                  </p>
                </ListItem>
              </Link>
            </li>
          )
        })}
    </List>
  )
}

export default VideoList

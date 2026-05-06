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
  max-height: 150px;
  overflow-y: auto;
  @media (max-width: 640px) {
    max-height: 120px;
  }
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
  html.dark-mode & li {
    border-bottom-color: #3a3a3a;
  }
  html.dark-mode & .active p,
  html.dark-mode & .active p:hover {
    color: #ffffff;
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
  @media (max-width: 640px) {
    p {
      font-size: 0.8rem;
      padding: 0.7rem;
    }
  }
  html.dark-mode & p {
    color: #e0e0e0;
  }
  html.dark-mode & small {
    color: #9b9b9b;
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

import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"
import * as moment from "moment"
import "moment/locale/pt"
import durationInLongText from "../utils/durationInLongText"

const Card = styled.div`
  position: relative;
  background: var(--white);
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
  transition: ease-in-out 0.3s all;
  &:hover {
    box-shadow: 0px 8px 35px 0px rgba(0, 0, 0, 0.13);
  }
  &:hover h3 {
    color: var(--accent);
  }
`
const CardContent = styled.div`
  padding: 1.5rem 1rem 3rem;
  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    line-height: 3rem;
    font-weight: 700;
    transition: 0.3s all;
  }
  h3:hover {
    color: var(--accent);
  }
  p {
    font-size: 1rem;
    line-height: 2rem;
  }
  svg {
    height: 1rem;
    margin-right: 0.75rem;
  }
  small {
    color: #444444;
    font-size: 14px;
  }
`
const StyledImg = styled(Img)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const CoursePreview = ({
  id,
  teacherName,
  title,
  slug,
  lastUpdated,
  coverImage,
  lessons,
}) => {
  const totalDuration = durationInLongText(
    lessons.reduce((pv, cv) => pv + cv.duration, 0)
  )
  console.log(teacherName)
  return (
    <Card>
      <Link to={slug}>
        <div>
          <StyledImg fluid={coverImage.childImageSharp.fluid} alt={title} />
        </div>
        <CardContent>
          <small>Última atualização: {moment(lastUpdated).format("L")}</small>
          <h3>{title}</h3>
          <p>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="book"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M128 152v-32c0-4.4 3.6-8 8-8h208c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8H136c-4.4 0-8-3.6-8-8zm8 88h208c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H136c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8zm299.1 159.7c-4.2 13-4.2 51.6 0 64.6 7.3 1.4 12.9 7.9 12.9 15.7v16c0 8.8-7.2 16-16 16H80c-44.2 0-80-35.8-80-80V80C0 35.8 35.8 0 80 0h352c8.8 0 16 7.2 16 16v368c0 7.8-5.5 14.2-12.9 15.7zm-41.1.3H80c-17.6 0-32 14.4-32 32 0 17.7 14.3 32 32 32h314c-2.7-17.3-2.7-46.7 0-64zm6-352H80c-17.7 0-32 14.3-32 32v278.7c9.8-4.3 20.6-6.7 32-6.7h320V48z"
              ></path>
            </svg>
            {lessons.length} lições
          </p>
          <p>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="stopwatch"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
              ></path>
            </svg>
            {totalDuration}
          </p>
        </CardContent>
      </Link>
    </Card>
  )
}
CoursePreview.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  coverImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.object.isRequired,
    }),
  }),
  lessons: PropTypes.arrayOf(
    PropTypes.shape({
      duration: PropTypes.number.isRequired,
    })
  ),
}
export default CoursePreview

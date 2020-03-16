import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const OuterWrapper = styled.div`
  background: #424f5b;
`
const Wrapper = styled.nav`
  padding: 1rem;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  color: white;
  font-size: 1.25rem;
  display: flex;
  justify-content: space-between;
  a {
    color: white;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    transition: all 0.1s linear;
  }
  a:hover {
    border-bottom: 3px solid white;
  }
`

function Nav({ children, className, ...props }) {
  return (
    <OuterWrapper>
      <Wrapper>
        <div>
          <Link to="/">Cursos</Link>
        </div>
        <div>
          <a
            href="http://escs.brunobrito.pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slides
          </a>
        </div>
      </Wrapper>
    </OuterWrapper>
  )
}

export default Nav

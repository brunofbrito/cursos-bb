import React from "react"
import styled from "styled-components"
import Logo from "../../images/logo-wordpress.svg"

const TopBar = styled.header`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 50px;
  }
`

const Header = () => {
  return (
    <TopBar>
      <a href="https://brunobrito.pt">
        <img src={Logo} alt="Logotipo BrunoBrito.PT" />
      </a>
    </TopBar>
  )
}

export default Header

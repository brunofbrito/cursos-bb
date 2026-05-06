import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Logo from "../../images/logo-wordpress.svg"

const TopBar = styled.header`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: background-color 0.3s ease;
  img {
    height: 50px;
  }
`

const DarkModeToggle = styled.button`
  position: absolute;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: var(--grey);
  display: flex;
  align-items: center;
  transition: color 0.2s ease;
  &:hover {
    color: var(--accent);
  }
`

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const Header = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark-mode"))
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add("dark-mode")
      localStorage.setItem("dark-mode", "true")
    } else {
      document.documentElement.classList.remove("dark-mode")
      localStorage.setItem("dark-mode", "false")
    }
  }

  return (
    <TopBar>
      <a href="https://brunobrito.pt">
        <img src={Logo} alt="Logotipo BrunoBrito.PT" />
      </a>
      <DarkModeToggle onClick={toggle} aria-label="Alternar modo escuro">
        {isDark ? <SunIcon /> : <MoonIcon />}
      </DarkModeToggle>
    </TopBar>
  )
}

export default Header

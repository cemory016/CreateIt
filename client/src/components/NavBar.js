import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  /* padding: 15px 2.5vw; */
  border-bottom: 10px solid black; 
`

const NavBar = () => {
  return (
    <NavStyle>
      <div>
        <h1><Link to="/">Craft It!</Link></h1>
      </div>
      <div>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/">Sign Up</Link></div>
        <div><Link to="/users">Log In</Link></div>
      </div>
    </NavStyle>
  )
}

export default NavBar

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import SignUp from './SignUp'


const NavStyle = styled.div`
  display: flex;
  justify-content: auto;
  width: 100vw;
  padding: 0%;
  margin: 0px;
`
const LandingTitle = styled.div`
text-decoration: none;
opacity: 0.95;
font-size: 51px;
color: #3D3300;
text-align: left;

`

const NavBar = () => {
  this.state = {
    toggleSignUp: false,
  }
  return (
    <NavStyle>
      <div>
        <LandingTitle>
          <Link to="/">Craft It!</Link>
        </LandingTitle>
      </div>
    </NavStyle>
  )
}

export default NavBar

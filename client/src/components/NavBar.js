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
  background: linear-gradient(to bottom right, #e2bc38, rgba(230,212,3,0.30));
`
const LandingTitle = styled.div`
text-decoration: none;
font-family: cursive;
opacity: 0.95;
font-size: 51px;
color: #3D3300;
text-align: left;
a:link {
    color: #3D3300;
    text-decoration-line: none;
}
a:visited {
    color: #3D3300;
}
a:hover {
    color: hotpink;
}
a:active {
    color: #3D3300;
}`

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

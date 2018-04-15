import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
import axios from 'axios'

const LandingImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1509664158680-07c5032b51e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=442ccbf5c1e7e58e0b9f1ed3e494fee8&auto=format&fit=crop&w=1950&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
`;
const HomeContainer = styled.div`
  text-align: center;
  /* overflow-y: scroll;
  overflow-x: hidden; */
  background-color: #151515;
  color: #EAEAEA;
`;

const LandingText = styled.div`
  margin: auto;
  text-align: center;
  background: rgba(10, 15, 5, 0.2);
  padding: 100px;
  color: #9A2C3E;
  border-radius: 3px;
  LandingText.h1 {
    font-size: 40px;
  }
`;
const ButtonPadding = styled.div`
  margin: 5px;
`;
const BodyContent = styled.div`
  width: 75vw;
  height: 100vh;
  text-align: center;
  margin: 20px auto;
  
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      signUpOpen: false,
      newUser: {
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        photo_url: ''
      },
      error: ''
    }
  }

  toggleSignUp = () => {
    this.setState({ signUpOpen: !this.state.signUpOpen })
  }

  handleChange = event => {
    const newUser = { ...this.state.user }
    const user = event.target.name
    newUser[user] = event.target.value
    this.setState({ user: newUser })
  };
createNewUser = async (e) => 
{
  e.preventDefault()
  const response = await axios.post('api/users', this.state.newUser)
  const user = [...this.state.user, response.data]
  this.setState({
    user,
    newUser: {
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      photo_url: ''
    }
  })
} 
 //     handleSubmit = async event => {
  //         event.preventDefault()
  //         const userId = this.props.userId;   
  //         const userNew = { ...this.state.user }
  //         await axios.post(`/api/users/`, userNew)
  //         // await this.props.getComment(userId)
  //     }




  render() {
    return (
      <HomeContainer>
        <LandingImage>
          <LandingText>
            <h1>Craft IT</h1>
            <p>
              If Trump Ipsum weren’t my own words, perhaps I’d be dating it.{" "}
              <br />I was going to say something extremely rough to Lorem Ipsum,<br />{" "}
              to its family, and I said to myself, "I can't do it. <br /> I just
              can't do it. It's inappropriate. It's not nice."
            </p>

            <ButtonPadding>

              <Button primary onClick={this.toggleSignUp}>
                Sign Up
        </Button>
              {this.state.signUpOpen ? <SignUp createNewUser={this.createNewUser} handleChange={this.handleChange} newUser={this.state.newUser} /> : null}
            </ButtonPadding>
            <ButtonPadding>
              <Button type="submit"><Link to="/users">Log In</Link></Button>
            </ButtonPadding>
          </LandingText>
        </LandingImage>

        <BodyContent>
          <h1>This is my body content</h1>
          <h4>put some stuff about crafting down here</h4>
        </BodyContent>
      </HomeContainer>
    );
  }
}

export default Home;
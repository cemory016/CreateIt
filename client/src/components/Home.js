import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
import axios from 'axios'



const LandingImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1509664158680-07c5032b51e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=442ccbf5c1e7e58e0b9f1ed3e494fee8&auto=format&fit=crop&w=1950&q=80"), radial-gradient(19% 73%, #E1BE0D 0%, rgba(230,212,3,0.00) 79%);
  /* background-size: cover;
  background-repeat: no-repeat; */
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const HomeContainer = styled.div`
  text-align: center;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const YellowGrade = styled.div`
/* background-image: radial-gradient(19% 73%, #E1BE0D 0%, rgba(230,212,3,0.00) 79%); */
`;

const LandingText = styled.div`
  font-size: 35px;
  color: #3D3300;
  letter-spacing: 0;
  text-align: left;
  }`;

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
      users: [],
      newUser: {
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        photo_url: ''
      },
      toggleSignUp: false,
      button: true,
      error: ''
    }
  }
  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = async () => {
    const res = await axios.get("/api/users")
    console.log(res.data)
    this.setState({ users: res.data })
  }
  toggleSignUp = () => {
    this.setState({ toggleSignUp: !this.state.toggleSignUp })
  }

  handleChange = event => {
    const newUser = { ...this.state.user }
    const user = event.target.name
    newUser[user] = event.target.value
    this.setState({ user: newUser })
  };

  createNewUser = async (e) => {
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
  // handleSubmit = async event => {
  //   event.preventDefault()
  //   const payload = this.state.newUser
  //   const response = await axios.post(`/api/users/`, payload)
  //   console.log(response.data)
  //   const users = [ ...this.state.newUser, response.data ]
  // this.setState({newUser: users})
  // this.props.toggleSignUp()
  // // await this.props.getUsers
  // }



  render() {
    return (
      <HomeContainer>
        <YellowGrade>
          <LandingImage>
            <LandingText>
              <p>
                If Trump Ipsum weren’t my own words, perhaps I’d be dating it.{" "}
                <br />I was going to say something extremely rough to Lorem Ipsum,<br />{" "}
                to its family, and I said to myself, "I can't do it. <br /> I just
                can't do it. It's inappropriate. It's not nice."
            </p>

              <ButtonPadding>

                {this.state.button ? (<div><Button size='massive' primary onClick={this.toggleSignUp}>Sign Up!</Button></div>) : null}

                {this.state.toggleSignUp ? (<SignUp
                  createNewUser={this.createNewUser} handleChange={this.handleChange} newUser={this.state.newUser}
                  toggleSignUp={this.toggleSignUp} />) : null}



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
        </YellowGrade>
      </HomeContainer>
    );
  }
}

export default Home;
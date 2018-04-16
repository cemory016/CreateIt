import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react'
import axios from 'axios'
import styled from 'styled-components'

const SignUpForm = styled.div`
    display: inline-block;
    text-align: center;
input{
    width: 25vw;
    height: 2vw;
    background: rgb(218, 216, 219, 0.5)
}
background: rgb(218, 216, 219, 0.75);
.button{
    margin: 1vw;
}
`

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            newUser: {
                firstName: '',
                lastName: '',
                email: '',
                userName: '',
                photo_url: ''
            },
        }
    }
    handleChange = event => {
        const name = event.target.name
        const newUsers = { ...this.state.newUser }
        newUsers[name] = event.target.value
        this.setState({ newUser: newUsers })
        console.log(this.state)
    };

    handleSubmit = async event => {
        event.preventDefault()
        const payload = this.state.newUser
        const response = await axios.post(`/api/users/`, payload)
        const users = [...this.state.newUser, response.data]
        this.setState({ newUser: users })
        this.props.toggleSignUp()
    }

    render() {
        return (
            <SignUpForm>
                <h1>Sign Up here!</h1>
                <h4>Start Crafting Today</h4>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' name="firstName" onChange={this.handleChange} value={this.state.firstName} />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' name="lastName" onChange={this.handleChange} value={this.state.lastName} />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='Email' name="email" onChange={this.handleChange} value={this.state.email} />
                    </Form.Field>
                    <Form.Field>
                        <label>User Name</label>
                        <input placeholder='User Name' name="userName" onChange={this.handleChange} value={this.state.userName} />
                    </Form.Field>
                    <Form.Field>
                        <label>Photo Url</label>
                        <input placeholder='Photo Url' name="photo_url" onChange={this.handleChange} value={this.state.photo_url} />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                    <Button onClick={this.props.toggleSignUp}>cancel</Button>
                </Form>
            </SignUpForm>
        )
    }
}

export default SignUp
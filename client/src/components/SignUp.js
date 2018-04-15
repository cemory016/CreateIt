import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react'
import axios from 'axios'

class SignUp extends Component {
constructor(){
    super();
    this.state ={
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
    //   handleSubmit = async event => {
    //     event.preventDefault()
    //     const userId = this.props.userId;
    //     const userNew = { ...this.state.user }
    //     await axios.post(`/api/users/`, userNew)
    //     // await this.props.getComment(userId)
    //   }

    handleSubmit = async event => {
        event.preventDefault()
        const payload = this.state.newUser
        const response = await axios.post(`/api/users/`, payload)
        const users = [...this.state.newUser, response.data]
        this.setState({ newUser: users })
        this.props.toggleSignUp()
    }

    
    // createNewUser = async (e) => {
    //     e.preventDefault()
    //     const response = await axios.post('api/users', this.state.newUser)
    //     const user = [...this.state.user, response.data]
    //     this.setState({
    //       user: {},
    //     })
    //   }

    render() {
        return (
            <div>
                <h1>This is my Toggle signUp form!</h1>
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
            </div>
        )
    }
}

export default SignUp
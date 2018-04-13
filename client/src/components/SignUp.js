import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react'
import axios from 'axios'

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
        }
    };

    handleChange = event => {
        const user = event.target.name
        const newUser = { ...this.state.user }
        newUser[user] = event.target.value
        this.setState({ user: newUser })
    };
    handleSubmit = async event => {
        event.preventDefault()
        const userId = this.props.userId;
        const userNew = { ...this.state.user }
        await axios.post(`/api/users/${userId}`, userNew)
        // await this.props.getComment(userId)
    }
    render() {
        return (
            <div>
                <h2>This is my SIGN UP toggle VIEW</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input fluid id='form-subcomponent-shorthand-input-first-name' label='First name' placeholder='First name' />
                        <Form.Input fluid id='form-subcomponent-shorthand-input-last-name' label='Last name' placeholder='Last name' />
                        <Form.Input fluid id='form-subcomponent-shorthand-input-email' label='email@email.com' placeholder='email' />
                        <Form.Input fluid id='form-subcomponent-shorthand-input-puserName' label='UserName' placeholder='username' />
                    </Form.Group>
                    <Button onSubmit={this.handleSubmit}>Submit Sign Up Form</Button>
                </Form>
            </div>
        );
    }
}

export default SignUp; 
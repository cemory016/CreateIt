import React, { Component } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components';

class EditUserProfile extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            user: {
                firstName: '',
                lastName: '',
                email: '',
                userName: '',
                photo_url: ''
            },
        }
    }

    handleChange = event => {
        const user = event.target.name
        const editProfile = { ...this.state.user }
        editProfile[user] = event.target.value
        this.setState({ user: editProfile })
        console.log(user)
    };

    handleSubmit = async event => {
        event.preventDefault()
        const payload = this.state.user
        const userId = this.props.userId
        const response = await axios.patch(`/api/users/${userId}`, payload)
        const users = [...this.state.user, response.data]
        this.setState({ user: users })
        this.props.toggleEditProfile()

        // const userId = this.props.userId;
        // console.log(userId)
        // const userUpdate = {...this.state.userId}
        // await axios.patch(`/api/users/${userId}`, userUpdate)
        // await this.props.getUser(userId)
        // this.setState({userId: userUpdate})
        // this.props.toggleEditProfile()

    }

    render() {
        if (this.state.error) {
            return <div>{this.state.error}</div>
        };
        return (
            <div>
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
                    <Button onClick={this.props.toggleEditProfile}>cancel</Button>
                </Form>
            </div>
        );
    }
}
export default EditUserProfile
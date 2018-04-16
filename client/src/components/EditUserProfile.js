import React, { Component } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components';

class EditUserProfile extends Component {
    constructor() {
        super();
        this.state = {
            editUser: {
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
        const editProfile = { ...this.state.editUser }
        editProfile[name] = event.target.value
        this.setState({ editUser: editProfile })
        console.log(this.state)
    };

    handleSubmit = async event => {
        event.preventDefault()
        const payload = this.state.editUser
        const response = await axios.patch(`/api/users/`, payload)
        const users = [...this.state.editUser, response.data]
        this.setState({ editUser: users })
        this.props.toggleEditProfile()
    }

    render() {
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
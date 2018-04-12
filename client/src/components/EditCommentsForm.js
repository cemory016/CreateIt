import React, { Component } from "react";
import { Form, TextArea, Button } from 'semantic-ui-react'
import axios from 'axios'

class EditCommentsForm extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            craft: {},
           // comments: [],
            comment: {
                title: "",
                text: "",
            }
        };
    }
    componentWillMount() {
        this.getUserData()
        this.getCraftsData()
        this.getCommentsData()
    }
    getUserData = async () => {
        const userId = this.props.userId;
        const userResponse = await axios.get(`/api/users/${userId}`)
        this.setState({
            user: userResponse.data,
        });
    };
    getCraftsData = async () => {
        const userId = this.props.userId;
        const craftId = this.props.craftId;
        const craftsResponse = await axios.get(`/api/users/${userId}/crafts/${craftId}`)
        this.setState({
            craft: craftsResponse.data.craft,
        });
    };
    getCommentsData = async () => {
        const userId = this.props.userId;
        const craftId = this.props.craftId;
        const commentsResponse = await axios.get(`/api/users/${userId}/crafts/${craftId}/comments`)
        this.setState({
            comments: commentsResponse.data.comments
        });
    };

    editComment = async (id) => {
        const userId = this.props.userId;
        const craftId = this.props.craftId;
        const commentsId = this.props.comments_id
        await axios.patch(`/api/users/${this.props.userId}/crafts/${this.props.craftId}/comments/${id}`)
        await this.getCommentsData()
    };
  render() {
    if (this.state.error) {
        return <div>{this.state.error}</div>
    }
    return (
        <Form onSubmit={this.handleSubmit}>
        <Form.Field>
            <input placeholder='Title' name="title" type="text" onChange={this.handleChange} />
        </Form.Field>
        <TextArea placeholder='Tell us more...' name="text" type="text" onChange={this.handleChange} />
        {/* <Button onSubmit={this.handleSubmit}>Submit</Button> */}
        <Button onClick={this.props.editToggle}>Edit Comment</Button>
    </Form>
    );
  }
}

export default EditCommentsForm;
import React, { Component } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react'
import axios from 'axios'

class PostNewCraftComment extends Component {
    constructor() {
        super();
        this.state = {
            comment: {
                title: "",
                text: "",
            }
        };
    }



    handleChange = event => {
        const comment = event.target.name
        const newComment = { ...this.state.comment }
        newComment[comment] = event.target.value
        this.setState({ comment: newComment })
    };

    handleSubmit = async event => {
        event.preventDefault()
        const userId = this.props.userId;
        const craftId = this.props.craftId;
        const commentUpdate = { ...this.state.comment }
        await axios.post(`/api/users/${userId}/crafts/${craftId}/comments`, commentUpdate)
        await this.props.getComment(userId, craftId)
    }

    render() {
        return (
            <div>
                {/* add on toggle to pull up form */}
                 <Button>New Comment</Button>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <input placeholder='Title' name="title" type="text" onChange={this.handleChange} />
                    </Form.Field>
                    <TextArea placeholder='Tell us more...' name="text" type="text" onChange={this.handleChange} />
                    <Button onSubmit={this.handleSubmit}>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default PostNewCraftComment; 
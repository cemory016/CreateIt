import React, { Component } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react'
import axios from 'axios'
import styled from 'styled-components'

const CraftConainer = styled.div`
background-color: #DAD8DB;
background-size: 50% 50%;
background-repeat: repeat;
margin-bottom: 0vw;
align-content: center;
`

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
        this.props.toggleNewCommentForm()
    }

    render() {
        return (
            <CraftConainer>
                 <Button>New Comment</Button>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <input placeholder='Title' name="title" type="text" onChange={this.handleChange} />
                    </Form.Field>
                    <TextArea placeholder='Tell us more...' name="text" type="text" onChange={this.handleChange} />
                    <Button onSubmit={this.handleSubmit}>Submit</Button>
                    <Button onClick={this.props.toggleNewCommentForm}>cancel</Button>
                </Form>
            </CraftConainer>
        );
    }
}

export default PostNewCraftComment; 
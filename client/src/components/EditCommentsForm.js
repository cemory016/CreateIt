import React, { Component } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 60vw;
  margin: 20px auto;
  display: inline-block;
    text-align: center;
input{
    width: 15vw;
    height: 2vw;
    background: rgb(218, 216, 219, 0.5)
}
textarea{
    width: 25vw;
    height: 2vw;
    background: rgb(218, 216, 219, 0.5)
}
background: rgb(218, 216, 219, 0.75);
.button{
    margin: 1vw;
}
`;

class EditCommentsForm extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            craft: {},
            comments: [],
            comment: {
                title: "",
                text: "",
            }
        };
    }
    handleChange = event => {
        const comment = event.target.name
        const editComment = { ...this.state.comment }
        editComment[comment] = event.target.value
        this.setState({ comment: editComment })
    };
    handleSubmit = async event => {
        event.preventDefault()
        const userId = this.props.userId;
        const craftId = this.props.craftId;
        const commentId = this.props.commentId;
        const commentUpdate = { ...this.state.commentId }
        await axios.patch(`/api/users/${userId}/crafts/${craftId}/comments/${commentId}`, commentUpdate)
        await this.props.getComment(userId, craftId, commentId)
this.setState({ commentId: commentUpdate})
        this.props.toggleEditComment()
    }
    render() {
        if (this.state.error) {
            return <div>{this.state.error}</div>
        };
        return (
            <FormContainer>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <input placeholder='Edit Title' name="title" type="text" onChange={this.handleChange} />
                    </Form.Field>
                    <TextArea placeholder='Edit Comment or Tell us more...' name="text" type="text" onChange={this.handleChange} />
                    <Button onSubmit={this.handleSubmit}
                    // onClick={this.props.toggleEditComment}
                    >Save Edits</Button>
                    <Button onClick={this.props.toggleSignUp}>cancel</Button>

                </Form>
            </FormContainer>
        );
    }
}

export default EditCommentsForm;    
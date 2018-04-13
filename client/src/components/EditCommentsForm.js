import React, { Component } from "react";
import { Form, TextArea, Button } from 'semantic-ui-react'
import axios from 'axios'
import styled from 'styled-components'

const FormContainer = styled.div`
  width: 60vw;
  margin: 20px auto;
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
        const commentId = this.props.id;
        const commentUpdate = { ...this.state.comment }
        await axios.patch(`/api/users/${userId}/crafts/${craftId}/comments/${commentId}`, commentUpdate)
        await this.props.getComment(userId, craftId)
    }
    render() {
        // if (this.state.error) {
        //     return <div>{this.state.error}</div>
        // }
        return (
            <FormContainer>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <input placeholder={this.props} name="title" type="text" onChange={this.handleChange} />
                        </Form.Field>
                        <TextArea placeholder='Tell us more...' name="text" type="text" onChange={this.handleChange} />
                        <Button onSubmit={this.handleSubmit}>Save Edits</Button>
                    </Form>
            </FormContainer>
                );
            }
        }
        
export default EditCommentsForm;
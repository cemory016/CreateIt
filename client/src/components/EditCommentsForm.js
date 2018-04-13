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
        const newComment = { ...this.state.comment }
        newComment[comment] = event.target.value
        this.setState({ comment: newComment })
    };
    render() {
        if (this.state.error) {
            return <div>{this.state.error}</div>
        }
        return (
            <FormContainer>
                <Form onSubmit={this.handleSubmit}>
                    <div>
                        <lable>Title</lable>
                    </div>
                    <input
                        placeholder='Title'
                        name="title"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <div>
                        <lable>Comment Edit</lable>
                    </div>
                    <inout
                        placeholder='Edit comment info'
                        name="text"
                        type="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />

                    {/* <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <input placeholder='Title' name="title" type="text" onChange={this.handleChange} />
                        </Form.Field>
                        <TextArea placeholder='Tell us more...' name="text" type="text" onChange={this.handleChange} />
                        <Button onSubmit={this.handleSubmit}>Submit</Button>
                    </Form> */}

                    <Button onSubmit={this.handleSubmit}>Save Edits</Button>
                </Form>
            </FormContainer >
        );
    }
}

export default EditCommentsForm;
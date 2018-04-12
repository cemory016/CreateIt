import React, { Component } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react'
import axios from 'axios'

class NewCraftComment extends Component {
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
        newComment[ comment ] = event.target.value
        this.setState({ comment: newComment})
    };

    handleSubmit = async event => {
        event.preventDefaule()
        const userId = this.props.match.params.user_id;
        const craftId = this.props.match.params.id
        const commentUpdate = {...this.state.comment }
        await axios.Post(`/api/users/${userId}/crafts/${craftId}/comments`, commentUpdate)
    }

        render() {
            return (
                <div>
                    <Form onSubmit={this.props.handleSubmit}>
                        <Form.Field>
                            <input placeholder='Title' name="title" type="text" onChange={this.handleChange}/>
                        </Form.Field>
                        <TextArea placeholder='Tell us more...' name="text" type="text" onChange={this.handleChange}/>
                        <Button onSubmit={this.props.handleSubmit}>Submit</Button>
                    </Form>
                </div>
            );
        }
}

export default NewCraftComment;
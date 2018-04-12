import React, { Component } from "react";
import { Input, Form } from 'semantic-ui-react'

class EditCommentsForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <Input
            placeholder={this.props.match.params.comments.title}
            name="title"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.match.params.comments.title}
          />
        </Form.Field>
        <Form.Field>
          <label>Comment about your craft</label>
          <Input
            placeholder={this.props.match.params.comments.text}
            name="text"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.match.params.comments.text}
          />
        </Form.Field>
        <Form.Button color="green" type="submit">Edit Comment</Form.Button>
      </Form>
    );
  }
}

export default EditCommentsForm;
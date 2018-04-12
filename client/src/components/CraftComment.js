import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditCommentsForm from './EditCommentsForm';
import { Image, Button, Card, Form, Input, TextArea } from 'semantic-ui-react';

class CraftComment extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            craft: {},
            comments: [],
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


    deleteComment = async (id) => {
        const userId = this.props.userId;
        const craftId = this.props.craftId;
        const commentsId = this.props.comments_id
        await axios.delete(`/api/users/${this.props.userId}/crafts/${this.props.craftId}/comments/${id}`)
        await this.getCommentsData()

    };


    render() {

        if (this.state.error) {
            return <div>{this.state.error}</div>
        }

        return (
            <div>
                <h1>Craft Comments</h1>
                {/* {this.state.comments} */}
                {/* <Button onClick={() => this.newComment(comments.id)}>New Comment</Button> */}

                {this.state.comments.map(comment => (
                    <div key={comment.id}>
                        {comment.title}
                        {comment.text}
                        <Button onClick={() => this.deleteComment(comment.id)}>Delete</Button>
                        <Button onClick={() => this.editComment(comment.id)}>Edit Comment</Button>
                    </div>
                ))}
                <Button>Edit</Button>
                {/* <EditCommentsForm 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                comments={this.props.comments}
                /> */}
            </div>
        );
    }
}


export default CraftComment
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
        const userId = this.props.userId;
        const craftId = this.props.craftId;
        this.getUserAndCraftsAndCommentsData(userId, craftId);
    }

    getUserAndCraftsAndCommentsData = async (userId, craftId) => {
        try {
            const userResponse = await axios.get(`/api/users/${userId}`)

            const craftsResponse = await axios.get(`/api/users/${userId}/crafts/${craftId}`)

            const commentsResponse = await axios.get(`/api/users/${userId}/crafts/${craftId}/comments`)
            console.log(commentsResponse.data)
            this.setState({
                user: userResponse.data,
                craft: craftsResponse.data.craft,
                comments: commentsResponse.data.comments
            });

        }
        catch (error) {
            console.log(error)
            await this.setState({ error: error.message });
            return error.message
        }
    };


    deleteComment = async (id) => {
        const userId = this.props.userId;
        const craftId = this.props.craftId;
        const commentsId = this.props.comments_id
        await axios.delete(`/api/users/${this.props.userId}/crafts/${this.props.craftId}/comments/${id}`)
        this.props.history.push('/')
    };

    // handleSubmit = async e => {
    //     e.preventDefault()
    //     const userId = this.props.userId;
    //     const craftId = this.props.craftId;
    //     const commentId = this.props.comment_id
    //     const commentNew = { ...this.state.comment }
    //     await axios.patch(`api/users/${userId}/crafts/${craftId}/comments`, commentNew)
    //     // this.toggleShowEdit()
    //     // await this.getSingleArtist()
    // };


    render() {

        // if (this.state.error){
        //     return <div>{this.state.error}</div>   
        // }

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
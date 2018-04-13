import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import EditCommentsForm from './EditCommentsForm';
import { Image, Button, Card, Form, Input, TextArea } from 'semantic-ui-react';
import styled from 'styled-components'

const CraftBorder = styled.div`
display: flex;
flex-wrap: wrap;
align-content: space-around;
border: solid red;
border-radius: 70px 20px;
padding: 1em;
margin: 2vw;
background-color: rgb(128, 128, 128, .3);
`;

class AllCraftComments extends Component {
       constructor() {
        super();
        this.state = {
            user: {},
            craft: {},
            comments: [
            ],
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
    }

        //         // getUserAndCraftsAndCommentsData = async (userId, craftId) => {
        //         //     try {
        //         //         const userResponse = await axios.get(`/api/users/${userId}`)

        //         //         const craftsResponse = await axios.get(`/api/users/${userId}/crafts/${craftId}`)

        //         //         const commentsResponse = await axios.get(`/api/users/${userId}/crafts/${craftId}/comments`)
        //         //         console.log(commentsResponse.data)
        //         //         this.setState({
        //         //             user: userResponse.data,
        //         //             craft: craftsResponse.data.craft,
        //         //             comments: commentsResponse.data.comments
        //         //         });

        //         //     }
        //         // catch (error) {
        //         //     console.log(error)
        //         //     await this.setState({ error: error.message });
        //         //     return error.message
        //         // }
        //         // handleSubmit = async e => {
        //         //     e.preventDefault()
        //         //     const commentId = this.state.comment.id
        //         //     const artistUpdate = { ...this.state.comment }
        //         //     await axios.patch(`api/users/${userId}/crafts/${craftId}/comments`, artistUpdate)
        //         //     this.toggleShowEdit()
        //         //     await this.getSingleArtist()
        //         //   };

        //     };

        //     // editComments = async (id) => {
        //     //     const userId = this.props.userId;
        //     //     const craftId = this.props.craftId;
        //     //     const commentsId = this.props.comments_id
        //     //     await axios.patch(`/api/users/${this.props.userId}/crafts/${this.props.craftId}/comments/${id}`)
        //     //     await this.getCommentsData()
        //     // };

            deleteComment = async (id) => {
                const userId = this.props.userId;
                const craftId = this.props.craftId;
                const commentsId = this.props.comments_id
                await axios.delete(`/api/users/${this.props.userId}/crafts/${this.props.craftId}/comments/${id}`)
                // this.props.history.push('/')
                await this.getCommentsData()
            };
        render() {

            if (this.state.error) {
                return <div>{this.state.error}</div>
            }

            return (
                <div>
                     <h1>Craft Comments</h1>
                    
                        {this.state.comments.map(comment => (
                            <div key={comment.id}>
                            <CraftBorder>
                                {comment.title}
                                {comment.text}
                                <Button onClick={() => this.deleteComment(comment.id)}>Delete</Button>
                                <Button onClick={() => this.editComments(comment.id)}>Edit Comment</Button>
                                <EditCommentsForm
                                    handleChange={this.handleChange}
                                    handleSubmit=
                                    {this.handleSubmit}
                                    comments={this.state.comments}
                                    user={this.state.user_id} />
                                     </CraftBorder>
                            </div>
                        ))}
                </div>
            );
        }
    }

export default AllCraftComments
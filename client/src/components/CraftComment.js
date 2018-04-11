import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Image, Button, Card } from 'semantic-ui-react'

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
            await this.setState({error: error.message});
            return error.message
        }
   // handleSubmit = async e => {
        //     e.preventDefault()
        //     const commentId = this.state.comment.id
        //     const artistUpdate = { ...this.state.comment }
        //     await axios.patch(`api/users/${userId}/crafts/${craftId}/comments`, artistUpdate)
        //     this.toggleShowEdit()
        //     await this.getSingleArtist()
        //   };

    };


    deleteComment = async (id) => {
        const userId = this.props.userId;
        const craftId = this.props.craftId;
        const commentsId = this.props.comments_id
        await axios.delete(`/api/users/${this.props.userId}/crafts/${this.props.craftId}/comments/${id}`)
        this.props.history.push('/')
      };
    render() {
 
        // if (this.state.error){
        //     return <div>{this.state.error}</div>   
        // }
        
        return (
            <div>
                <h1>Craft Comments</h1>
                <Button>New Comment</Button>
                {this.state.comments.map(comment => (
                    <div key={comment.id}>
                    {comment.title}
                    {comment.text}
                    <Button onClick={()=>this.deleteComment(comment.id)}>Delete</Button>
                    </div>
                ))}
                <Button>Edit</Button>
                
            </div>
        );
    }
}


export default CraftComment
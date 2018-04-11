import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Image } from 'semantic-ui-react'

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
        const userId = this.props.match.params.user_id;
        const craftId = this.props.match.params.craft_id;
        const commentId = this.props.match.params.id
        this.getUserAndCraftsAndCommentsData(userId, craftId, commentId);
    }

    getUserAndCraftsAndCommentsData = async (userId, craftId, commentId) => {
        try {
            const userResponse = await axios.get(`/api/users/${userId}`)
       
            const craftsResponse = await axios.get(`/api/users/${userId}/crafts/${craftId}`)

            const commentsResponse = await axios.get(`/api/users/${userId}/crafts/${craftId}/comments/${commentId}`)
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

    }
    render() {
        const userId = this.props.match.params.user_id;
        const craftId = this.props.match.params.craft_id;
        const commentId = this.props.match.params.id
 
        if (this.state.error){
            return <div>{this.state.error}</div>   
        }

        return (
            <div>
                <h1>Craft Comments</h1>
                {this.state.comments.map(comment => (
                    <div key={comment.id}>
                    {comment.title}
                    {comment.text}
                    </div>
                ))}
            </div>
        );
    }
}

export default CraftComment
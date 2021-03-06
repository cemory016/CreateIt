import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditCommentsForm from './EditCommentsForm';
import { Image, Button, Card, Form, Input, TextArea } from 'semantic-ui-react';
import styled from 'styled-components';

const PageContainer = styled.div`
background-color: #DAD8DB;
background-repeat: repeat;
margin-bottom: 0vw;
align-content: center;
h1{
    text-align: center;
}
h2{
    text-align: center;
}
p{
    text-align: center;
}
`
const CraftBorder = styled.div`
/* border: solid red; */
border-radius: 70px 20px;
padding: 3em;
margin: 2vw;
margin-bottom: 0px;
background-color: rgb(128, 128, 128, .3);
`;

class AllCraftComments extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            craft: {},
            comments: [],
            toggleEditComment: false,
            button: true,
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
    toggleEditComment = () => {
        this.setState({ toggleEditComment: !this.state.toggleEditComment})
    }

    deleteComment = async (id) => {
        const userId = this.props.userId;
        const craftId = this.props.craftId;
        const commentsId = this.props.comments_id
        await axios.delete(`/api/users/${this.props.userId}/crafts/${this.props.craftId}/comments/${id}`)
        await this.getCommentsData()
    };
    render() {
        const userId = this.props.userId;
        const craftId = this.props.craftId;
        const commentId = this.props.commentId;

        if (this.state.error) {
            return <div>{this.state.error}</div>
        }

        return (
            <PageContainer>
                <h1>Craft Comments</h1>

                {this.state.comments.map(comment => (
                    <div key={comment.id}>
                        <CraftBorder>
                            <h2>{comment.title}</h2>
                            <p>{comment.text}</p>
                            <Button onClick={() => this.deleteComment(comment.id)}>Delete</Button>

                            {this.state.button ? (<div><Button size='massive' primary onClick={this.toggleEditComment}>Edit Comment</Button></div>) : null}

                            {this.state.toggleEditComment ? (<EditCommentsForm
                                commentId={comment.id}
                                userId={this.props.userId}
                                craftId={this.props.craftId}
                                getComment={this.getCommentsData}
                                toggleSignUp={this.toggleEditComment}
                                 
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}/>) : null}

                        </CraftBorder>
                    </div>
                ))}
            </PageContainer>
        );
    }
}

export default AllCraftComments
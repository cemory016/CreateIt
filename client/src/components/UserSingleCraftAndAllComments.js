import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Image, Button, Rating } from 'semantic-ui-react';
import AllCraftComments from './AllCraftComments';
import PostNewCraftComment from './PostNewCraftComment';
import styled from 'styled-components';

const PageContainer = styled.div`
background-color: #DAD8DB;
background-size: 50% 50%;
background-repeat: repeat;
margin-bottom: 0vw;
align-content: center;
h2{
    margin: 0px;
    padding: 0px;
    align-content: center;
}
`
const CenterMe = styled.div`
align-content: center;
`
const CraftImage = styled.div`
display: flex;
flex-wrap: wrap;
align-content: center;
width: 25vw;
height: 25vw;
`
const NewCraftCommet = styled.div`
text-align: center;
`


class UserSingleCraftAndComments extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            toggleNewCommentForm: false,
            button: true,
            craft: {
                comments: []
            },
        };
    }

    componentWillMount() {
        const userId = this.props.match.params.user_id;
        const craftId = this.props.match.params.id;
        this.getUserAndCraftsData(userId, craftId);
    }
    toggleNewCommentForm = () => {
        this.setState({ toggleNewCommentForm: !this.state.toggleNewCommentForm })
    }
    getUserAndCraftsData = async (userId, craftId) => {
        try {
            const userResponse = await axios.get(`/api/users/${userId}`)

            const craftsResponse = await axios.get(`/api/users/${userId}/crafts/${craftId}`)

            console.log(craftsResponse.data)
            this.setState({
                user: userResponse.data,
                craft: craftsResponse.data.craft,
            });

        }
        catch (error) {
            console.log(error)
            await this.setState({ error: error.message });
            return error.message
        }

    }

    render() {
        const userId = this.props.match.params.id;
        const craftId = this.props.match.params.id;
        if (this.state.error) {
            return <div>{this.state.error}</div>


        }
        return (
            <PageContainer>
                <CenterMe>
                    <h2>{this.state.craft.title}</h2>
                    <CraftImage>
                        <img src={this.state.craft.photo_url} alt="" />
                    </CraftImage>
                </CenterMe>
                <NewCraftCommet>

                    {this.state.button ? (<div><Button size='massive' primary onClick={this.toggleNewCommentForm}>New Comment</Button></div>) : null}

                    {this.state.toggleNewCommentForm ? (<PostNewCraftComment
                        userId={this.props.match.params.user_id}
                        craftId={this.props.match.params.id}
                        getComment={this.getUserAndCraftsData}
                        toggleNewCommentForm={this.toggleNewCommentForm}
                    />) : null}

                </NewCraftCommet>
                <AllCraftComments
                    userId={this.props.match.params.user_id}
                    craftId={this.props.match.params.id}
                />
            </PageContainer>

        );

    }
}


export default UserSingleCraftAndComments;
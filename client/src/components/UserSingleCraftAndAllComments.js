import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Image, Button } from 'semantic-ui-react'
import AllCraftComments from './AllCraftComments'
import PostNewCraftComment from './PostNewCraftComment'
import styled from 'styled-components'

const CraftImage = styled.div`
display: flex;
flex-wrap: wrap-reverse;
border: solid black;
`;


class UserSingleCraftAndComments extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
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

    getUserAndCraftsData = async (userId, craftId) => {
        try {
            const userResponse = await axios.get(`/api/users/${userId}`)

            const craftsResponse = await axios.get(`/api/users/${userId}/crafts/${craftId}`)
            console.log(craftsResponse.data)
            this.setState({
                user: userResponse.data,
                craft: craftsResponse.data.craft
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
        const craftId = this.props.match.params.id
        if (this.state.error) {
            return <div>{this.state.error}</div>


        }
        return (
            <div>
                <h1>This is a Users Single Craft View</h1>
                <h3>User will be able to edit and rate crafts from here</h3>
                <h4>as well as link to the crafts directions</h4>
                <br />
                <h4>{this.state.craft.title}</h4>
                <CraftImage>
                    <img src={this.state.craft.photo_url} alt="" />
                </CraftImage>

                <PostNewCraftComment
                    userId={this.props.match.params.user_id}
                    craftId={this.props.match.params.id}
                    getComment={this.getUserAndCraftsData}
                />
                <AllCraftComments
                    userId={this.props.match.params.user_id}
                    craftId={this.props.match.params.id}
                />


            </div>

        );

    }
}


export default UserSingleCraftAndComments;
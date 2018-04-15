import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Image, Button } from 'semantic-ui-react'
import styled from 'styled-components'

const UserProfileContainer = styled.div`
background-image: url("https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8b5d177ad38580e039c7f403c0554ea6&auto=format&fit=crop&w=1567&q=80");
background-size: 50% 50%;
background-repeat: repeat;
margin: 3vw;
margin-bottom: 0vw;
align-content: center;
`

const UserInfoContainer = styled.div`
align-self: auto;
text-align: center;
width: 50vw;
`
const RandomCraftArea = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
width: 50vw;
`
const BigBox = styled.div`
display: flex;
flex-direction: row;
width: 100vw;
`
const RandomCraftImage = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-content: center;
img {
    width: auto;
    height: 250px;
}
`

const CraftBorder = styled.div`
display: flex;
border-radius: 70px 20px;
padding: 5em;
margin: 5vw;
margin-bottom: 0em;
background-color: rgb(128, 128, 128, .15);
`

const CraftTitle = styled.div`
h4 { 
font-weight: bold;
color: #935004;
}
`
const CraftImage = styled.div`
display: flex;
flex-wrap: wrap;
border: solid black;
opacity: 0.8;
img {
    width: auto;
    height: 250px;
}
`

const CraftInfo = styled.div`
display: flex;
flex-wrap: wrap;
text-align: justify;
padding: 2vw;
`

class UserProfile extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            crafts: [],
            comments: [],

        };
    }

    componentWillMount() {
        const userId = this.props.match.params.id;
        const craftId = this.props.match.params.id;
        const commentId = this.props.match.params.id;
        this.getUserAndCraftsData(userId, craftId);
    }
    getUserAndCraftsData = async (userId) => {
        try {
            const userResponse = await axios.get(`/api/users/${userId}`);

            const craftsResponse = await axios.get(`/api/users/${userId}/crafts`);


            await this.setState({
                user: userResponse.data,
                crafts: craftsResponse.data.crafts
            });

            // debugger;
            console.log(this.state.crafts)
        }
        catch (error) {
            console.log(error)
            await this.setState({ error: error.message });
            return error.message
        }

    }

    render() {
        const userId = this.props.match.params.id;
        if (this.state.error) {
            return <div>{this.state.error}</div>


        }
        return (
            <UserProfileContainer>
                <BigBox>
                    <UserInfoContainer>
                        <h4>I am a single user and this is my profile</h4>
                        <h1>{this.state.user.firstName} {this.state.user.lastName}</h1>
                        <img src={this.state.user.photo_url} alt="userImage" size="400vw 200vw" />
                        <h2>User Name: {this.state.user.userName}</h2>
                        <h2>Email: {this.state.user.email}</h2>
                        <Button>Edit User Profile Info</Button>
                    </UserInfoContainer>
                    <RandomCraftArea>
                        <h2>Work on getting a randomly generated craft to populate here</h2>
                        <RandomCraftImage>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs56Q00C_cYBjDKk8HpUpv-1uHUge-OxVYoYsptd3f9lk5LmC6" alt="randomCraft" size="50px 50px" />
                        </RandomCraftImage>
                        <div><h3>title</h3></div>
                        <div><h4>Craft It!!</h4></div>
                        <div><h4>Skip It!</h4></div>
                    </RandomCraftArea>
                </BigBox>
                {this.state.crafts.map(craft => (
                    <div key={craft.id}>
                        <CraftBorder>
                            <Link to={`/users/${userId}/crafts/${craft.id}`}>
                                <CraftTitle>
                                    <h4>{craft.title}</h4>
                                </CraftTitle>
                                <CraftImage>
                                    <img src={craft.photo_url} alt="craft_image" />
                                </CraftImage>
                            </Link>
                            <CraftInfo>
                                <p>This will the any comment the user has on this craft, but validated to only shoule 100 characters with a link that reads ...more to navigated the user to the single craft view with all comments.      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet laoreet augue nec bibendum. Duis ac ligula ac diam posuere cursus. Nunc porttitor gravida orci, id interdum elit tincidunt id. Vivamus et nisi quis tellus vulputate consectetur. Cras laoreet sit amet nunc at bibendum. Fusce posuere varius turpis et maximus. Suspendisse porta, mauris quis tempor fringilla, magna dui blandit libero, ut bibendum lectus quam id neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec blandit ut sapien ut tincidunt. Donec id magna ante. Sed at aliquam mauris. Sed et vehicula sem, quis pretium massa.</p>
                            </CraftInfo>
                        </CraftBorder>
                    </div>
                ))}
            </UserProfileContainer >
        );

    }
}


export default UserProfile
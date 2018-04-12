import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Image } from 'semantic-ui-react'
import styled from 'styled-components'

const UserProfileContainer = styled.div`
background-image: url("https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8b5d177ad38580e039c7f403c0554ea6&auto=format&fit=crop&w=1567&q=80");
background-size: cover;
background-repeat: no-repeat;
height: 100vw;
width: 100vw;
display: flex;
`;
const CraftBorder = styled.div`
display: flex;
/* justify-content: center; */
border: solid red;
/* align-content: center;
position: relative; */
padding: 1em;
margin: 15px;
width: 50vw;
`;
const CraftImage = styled.div`
display: flex;
border: solid black;
`;


class SingleUserProfile extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            crafts: []
        };
    }

    componentWillMount() {
        const userId = this.props.match.params.id;
        const craftId = this.props.match.params.id;
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
                <h1>I am a single user and this is my profile</h1>
               <img src={this.state.user.photo_url} alt="userImage" />
                <h1>{this.state.user.firstName} {this.state.user.lastName}</h1>
                <h2>{this.state.user.userName}</h2>
                <h2>{this.state.user.email}</h2>
                {this.state.crafts.map(craft => (
                    <div key={craft.id}>
                        <CraftBorder>
                            <Link to={`/users/${userId}/crafts/${craft.id}`}>
                                <h4>{craft.title}</h4>
                                <CraftImage>
                                    <img src={craft.photo_url} alt="craft_image" />
                                </CraftImage>
                            </Link>
                            <p>This will the any comment the user has on this craft, but validated to only shoule 100 characters with a link that reads ...more to navigated the user to the single craft view with all comments.</p>
                        </CraftBorder>
                    </div>
                ))}
            </UserProfileContainer>

        );

    }
}


export default SingleUserProfile;
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditCommentsForm from './EditCommentsForm';
import { Image, Button, Card, Form, Input, TextArea } from 'semantic-ui-react';
import styled from 'styled-components';


class AllCrafts extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            craft: [],
        };
    }
    componentWillMount() {
        this.getCraftsData()
    }
    getUsersData = async () => {
        const allUsers = this.state.user.map(function (user, idx) {
            return
            <ul key={idx}>
                {user.map(user, (val, ind) => {
                    return
                    (<li>
                        {val}
                    </li>)
                        ;
                })}
            </ul>;
            console.log(user)
        });
    }
        
    getCraftsData = async () => {
        const allCrafts = this.state.craft.map(function (craft, idx) {
            return
            <ul key={idx}>
                {craft.map(craft, (val, ind) => {
                    return
                    (<li>
                        {val}
                    </li>)
                        ;
                })}
            </ul>;
            console.log(craft)
        });
    }
        render() {
            const allCraftsFromAllUsers = this.props.allCrafts;


            if (this.state.error) {
                return <div>{this.state.error}</div>
            }

            return (
                <div>
                    <h1>All Crafts</h1>

                    {this.state.craft.map(craft => (
                        <div key={craft.id}>

                            <h2>{craft.title}</h2>
                            <p>{craft.photo_url}</p>

                            {/* <Button size='massive' primary onClick={() => this.addCraftToUserBucket(user.id)}>Add to my craft bucket</Button> */}

                        </div>
                    ))}
                </div>
            );
        }
    }

    export default AllCrafts


    // getCraftsData = async () => {
    //     const userId = this.props.userId;
    //     const craftId = this.props.craftId;
    //     const craftsResponse = await axios.get(`/api/users/${userId}/crafts/${craftId}`)
    //     this.setState({
    //         craft: craftsResponse.data.craft,
    //     });
    // };
    // getAllCrafts = async () => {
    //     //     const users = this.state.users;
    //     //     const craftId = this.props.craftId;
    //     //     const commentsResponse = await axios.get(`/api/users/${userId}/crafts/${craftId}/comments`)
    //     //     this.setState({
    //     //         comments: commentsResponse.data.comments
    //     //     });
    // }
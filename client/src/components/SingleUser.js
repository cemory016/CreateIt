import React, {Component} from 'react';
import axios from 'axios';
import UserList from './UserList';

class SingleUser extends Component {
    constructor() {
        super();
        this.state = {
            firstName: {},
            lastName: {},
            email: {},
            photo_url: {},
            userName: {}
        };
    }
    render() {
        return (
            <div>
                <img src={this.state.user.photo_url} alt=""/>
                <h1>{this.state.user.name}</h1>
            </div>
        );
    }
}

export default SingleUser;
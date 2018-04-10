import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AllUserList extends Component {
    constructor(){
        super();
        this.state = {
            error: '',
            users: []
        }
    }

    componentWillMount(){
        this.fetchUsers();
    }

    fetchUsers = async () => {
        try {
            const res = await axios.get('/api/users');
            await this.setState({users: res.data});
            return res.data;
        }
        catch (err) {
            console.log(err)
            await this.setState({error: err.message})
            return err.message
        }

    }

    render() {
        if (this.state.error){
            return <div>{this.state.error}</div>
        }
        return (
            <div>
                <h1>All Users</h1>
                {this.state.users.map(user => (
                    <div key={user.id}>
                        <Link to={`/users/${user.id}`} >{user.userName}</Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default AllUserList;
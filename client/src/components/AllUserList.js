import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'

const AllUsersContainer = styled.div`
text-align: center;
display: flex;
flex: wrap;
flex-direction: row;
flex-flow: wrap;
align-content: flex-end;
justify-content: center;
align-items: center;
margin-bottom: 0px;
a:link {
    color: #3D3300;
    text-decoration-line: none;
    align-content: center;
    font: bold;
}
a:visited {
    color: #3D3300;
}
a:hover {
    color: hotpink;
}
a:active {
    color: #3D3300;
}`

const EachUser = styled.div`
border-radius: 70px 20px;
padding: 3em;
margin: 2vw;
margin-bottom: 0px;
background-color: rgb(128, 128, 128, .3);
img{
    display: flex;
    flex-wrap: wrap;
}
`
const BackGround = styled.div`
background: rgb(218, 216, 219);
padding: 0px;
margin: 0px;
text-align: center;
h1{
    padding: 0px;
    margin: 0px;
}
`

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
            <BackGround>
            <h1>All Users</h1>
            <AllUsersContainer>
                
                {this.state.users.map(user => (
                    <div key={user.id}>
                    <EachUser>
                        <Link to={`/users/${user.id}`}>
                        <img src={user.photo_url} alt="smallUserImage" width="70vw" height="70vw" />
                        {user.userName}
                        </Link>
                        </EachUser>
                    </div>
                ))}
            </AllUsersContainer>
            </BackGround>
        );
    }
}

export default AllUserList;
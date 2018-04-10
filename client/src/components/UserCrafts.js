import React, {Component} from 'react';
import axios from 'axios';

class UserCrafts extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            crafts: [],
        };
    }

    componentWillMount() {
        const userId = this.props.match.params.user_id;
        this.getUserAndCraftsData(userId);
        console.log("error")
    }
    getUserAndCraftsData = async (userId) => {
        try {
            const userResponse = await axios.get(`/api/users/${userId}`)
       
            const craftsResponse = await axios.get(`/api/users/${userId}/crafts`)
    
            await this.setState({
                user: userResponse.data,
                craft: craftsResponse.data
            });
           
        }
        catch (error) {
            console.log(error)
            await this.setState({error: error.message});
            return error.message
        }

    }

    render() {
        if (this.state.error){
            return <div>{this.state.error}</div>
            
        
        }
        return (
            <div>
                <h1>This is a Users Single Craft View</h1> 
                <h3>User will be able to edit and rate crafts from here</h3> 
                <h4>as well as link to the crafts directions</h4>
            </div>
           
        );
       
    }
}


export default UserCrafts;
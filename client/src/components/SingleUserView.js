import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class SingleUserView extends Component {
    constructor() {
        super();
        this.state = {
            user: { },
            crafts: [],
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
            await this.setState({error: error.message});
            return error.message
        }

    }

    render() {
        const userId = this.props.match.params.id;
        if (this.state.error){
            return <div>{this.state.error}</div>
            
        
        }
        return (
            <div>
                
                <h1>I am a single user and this is my view</h1>
                
                <h1>{this.state.user.firstName}</h1>
                <h2>{this.state.user.email}</h2>
                {this.state.crafts.map(craft => (
                    <div key={craft.id}>
                        <h4>{craft.title}</h4>
                    </div>
                ))}
                <Link to="/users/${userId}/crafts/${crafts}">Crafts</Link>
            </div>
           
        );
       
    }
}


export default SingleUserView;
import React, {Component} from 'react';
import axios from 'axios';

class SingleUserView extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                firstName: "",
                lastName: "",
                email: "",
                photo_url: "",
                userName: "",
            },
            crafts: [],
        };
    }

    componentWillMount() {
        const userId = this.props.match.params.id;
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
                <h1>I am a single user and this is my view</h1>
                
                <h1>{this.state.user.firstName}</h1>
                <h2>{this.state.user.email}</h2>
                {this.state.crafts.map(craft => (
                    <div key={craft.id}>
                        <h4>{craft.title}</h4>
                    </div>
                ))}
                
            </div>
           
        );
       
    }
}


export default SingleUserView;
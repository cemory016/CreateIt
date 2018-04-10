// import React, {Component} from 'react';
// import axios from 'axios';
// import AllUserList from './AllUserList';

// class SingleUserView extends Component {
//     constructor() {
//         super();
//         this.state = {
//             firstName: {},
//             lastName: {},
//             email: {},
//             photo_url: {},
//             userName: {}
//         };
//     }
//     render() {
//         return (
//             <div>
//                 <img src={this.state.user.photo_url} alt=""/>
//                 <h1>{this.state.user.name}</h1>
//             </div>
//         );
//     }
// }

// export default SingleUserView;


import React, {Component} from 'react';
import axios from 'axios';

class SingleUserView extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                // firstName: {},
                // lastName: {},
                // email: {},
                // photo_url: {},
                // userName: {},
            },
            crafts: [],
        };
    }

    componentWillMount() {
        const userId = this.props.match.params.id;
        this.fetchUserAndCraftsData(userId)
      
    }

    fetchUserAndCraftsData = async (userId) => {
        try {
            const userResponse = await axios.get(`/api/users/${userId}`)
       
            const craftsResponse = await axios.get(`/api/users/${userId}/crafts`)
    
            await this.setState({
                user: userResponse.data,
                crafts: craftsResponse.data
            });
           
        }
        catch (error) {
            console.log(error)
            await this.setState({error: error.message})
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
                {/* <h1>{this.state.user.firstName}</h1>
                <h2>{this.state.user.email}</h2>
                {this.state.crafts.map(craft => (
                    <div key={craft.id}>
                        <h4>{craft.title}</h4>
                    </div>
                ))}
                 */}
            </div>
           
        );
       
    }
}


export default SingleUserView;
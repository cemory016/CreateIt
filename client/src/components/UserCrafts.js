// import React, {Component} from 'react';
// import axios from 'axios';

// class Artist extends Component {
//     constructor() {
//         super();
//         this.state = {
//             artist: {},
//             songs: [],
//         };
//     }

//     componentWillMount() {
//         const artistId = this.props.match.params.id;
//         this.fetchArtistAndSongData(artistId)
//     }

//     fetchArtistAndSongData = async (artistId) => {
//         try {
//             const artistResponse = await axios.get(`/api/artists/${artistId}`)
//             const songsResponse = await axios.get(`/api/artists/${artistId}/songs`)
//             await this.setState({
//                 artist: artistResponse.data,
//                 songs: songsResponse.data
//             });
//         }
//         catch (error) {
//             console.log(error)
//             await this.setState({error: error.message})
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <img src={this.state.artist.photo_url} alt=""/>
//                 <h1>{this.state.artist.name}</h1>
//                 {this.state.songs.map(song => (
//                     <div key={song.id}>
//                         <h4>{song.title}</h4>
//                         <audio controls src={song.preview_url}></audio>
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }

// export default Artist;

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
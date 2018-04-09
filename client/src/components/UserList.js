// import React, { Component } from 'react'
// import axios from 'axios'
// import { Container, Modal, Button, Card, Image } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'
// import NewUserForm from './NewUserForm'

// const FlexCards = styled.div`
//   display: flex;
//   flex-flow: row-reverse wrap-reverse;
//   justify-content: space-around;
//   align-items: flex-start;
//   align-content: flex-start;
// `

// class UserList extends Component {
//   state = {
//     user: [],
//     userFormOpen: false,
//     newUser: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       photo_url: '',
//       userName: ''
//     },
//     error: ''
//   }
//   componentDidMount () {

//     // Initiate API call to Rails
//     // When successful, update the state
//     this.getAllUsers()
//   }

//   fetchUsers = () => {
//     axios.get('/api/users').then(res => {
//       return this.setState({users: res.data.users});
//     }).catch(err => {
//       console.log(err)
//       this.setState({error: err.message})
//     })
//   }

//   toggleNewUserForm = () => {
//     this.setState({ userFormOpen: !this.state.userFormOpen })
//   }

//   handleChange = (event) => {
//     const newUser = { ...this.state.newUser }
//     const attribute = event.target.name
//     newUser[ attribute ] = event.target.value

//     this.setState({ newUser: newUser })
//   }

//   createNewUser = async (e) => {
//     e.preventDefault()
//     const response = await axios.post('/api/users', this.state.newUser)
//     const users = [ ...this.state.users, response.data ]
//     this.setState({
//       users,
//       newUser: {
//         firstName: '',
//         lastName: '',
//         email: '',
//         photo_url: '',
//         userName: ''
//       }
//     })
//   }

//   render () {
//     return (
//       <Container>
//         <h1>Users</h1>
//         <Button primary onClick={this.toggleNewUserForm}>
//           Create New User
//         </Button>
//         { this.state.userFormOpen ? <NewUserForm createNewUser={this.createNewUser} handleChange={this.handleChange} newUser={this.state.newUser}/> : null}
//         <FlexCards>
//           {this.state.users.map(user => {
//             return (
//               <Card key={user.id}>
//                 <Link to={`/users/${user.id}`}>
//                   <Image src={user.photo_url}/>
//                   <Card.Content>
//                     <Card.Header>{user.userName}</Card.Header>
//                     <Card.Meta>{user.email}</Card.Meta>
//                   </Card.Content>
//                 </Link>
//               </Card>
//             )
//           })}
//         </FlexCards>
//         {this.state.err}
//       </Container>
//     )
//   }
// }

// export default UserList

// // Get all of our Users from Rails API
// // We want to show all of the Users once it's fetched.
// // Users should be able to click on an User and visit the single User page.

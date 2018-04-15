import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react'
import axios from 'axios'

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
        }
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
    render () {
      return (
        <Form onSubmit={this.props.createNewUser}>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='Name' name="name" onChange={this.props.handleChange} value={this.props.newUser.firstName}/>
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Name' name="name" onChange={this.props.handleChange} value={this.props.newUser.lastName}/>
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Nationality' name="nationality" onChange={this.props.handleChange} value={this.props.newUser.email}/>
          </Form.Field>
          <Form.Field>
            <label>User Name</label>
            <input placeholder='Name' name="name" onChange={this.props.handleChange} value={this.props.newUser.userName}/>
          </Form.Field>
          <Form.Field>
            <label>Photo Url</label>
            <input placeholder='Photo Url' name="photo_url" onChange={this.props.handleChange} value={this.props.newUser.photo_url}/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      )
    }
  }
  
  export default SignUp



// class SignUp extends Component {
//     constructor() {
//         super();
//         this.state = {
//             user: {},
//         }
//     };

//     handleChange = event => {
//         const user = event.target.name
//         const newUser = { ...this.state.user }
//         newUser[user] = event.target.value
//         this.setState({ user: newUser })
//     };
//     handleSubmit = async event => {
//         event.preventDefault()
//         const userId = this.props.userId;   
//         const userNew = { ...this.state.user }
//         await axios.post(`/api/users/`, userNew)
//         // await this.props.getComment(userId)
//     }
//     render() {
//         return (
//             <div>
//                 <h2>This is my SIGN UP toggle VIEW</h2>
//                 <Form onSubmit={this.handleSubmit}>
//                     <Form.Group widths='equal'>
//                         <Form.Input fluid id='form-subcomponent-shorthand-input-first-name' label='First name' placeholder='First name' />
//                         <Form.Input fluid id='form-subcomponent-shorthand-input-last-name' label='Last name' placeholder='Last name' />
//                         <Form.Input fluid id='form-subcomponent-shorthand-input-email' label='email@email.com' placeholder='email' />
//                         <Form.Input fluid id='form-subcomponent-shorthand-input-puserName' label='UserName' placeholder='username' />
//                     </Form.Group>
//                     <Button onSubmit={this.handleSubmit}>Submit Sign Up Form</Button>
//                 </Form>
//             </div>
//         );
//     }
// }

// export default SignUp; 
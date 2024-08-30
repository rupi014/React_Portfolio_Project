import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorText: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { 
    this.setState({[event.target.name]: event.target.value, errorText: ''});
  }

  handleSubmit(event) {
    axios.post("https://api.devcamp.space/sessions", 
    {
      client: {
        email: this.state.email,
        password: this.state.password
      }
    },
    { withCredentials: true }
    ).then(response => {
      if (response.data.status === "created") {
        this.props.handleSuccessfulAuth(); 
      } else {  
        this.setState({errorText: "Invalid email or password."});
        this.props.handleUnsuccessfulAuth();
      }
    }).catch(error => {
      console.log("Login Error", error);
      this.setState({errorText: "An error occurred. Please try again."});
      this.props.handleUnsuccessfulAuth();
    }); 

    event.preventDefault();
  }

  render() {
    return ( 
      <div>
          <h1>LOGIN TO ACCES YOUR DASHBOARD</h1>

          <div>{this.state.errorText}</div>

          <form onSubmit={this.handleSubmit} className='auth-form-wrapper'>

            <div className='from-group'>
              <FontAwesomeIcon icon="envelope"/> 
              <input type="email" name="email" placeholder="Your Email" value={this.state.email} onChange={this.handleChange} />
            </div>

            <div className='from-group'>
              <FontAwesomeIcon icon="lock"/>
              <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
            </div>

          
            <button type="submit" className='btn'>Login</button>
         

          </form>   
      </div>
    )
  }
}
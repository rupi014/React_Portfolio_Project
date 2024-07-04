import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return ( 
      <div>
          <h1>LOGIN TO ACCES YOUR DASHBOARD</h1>
          <form className='login-form'>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
          </form>   
      </div>
    )
  }
}
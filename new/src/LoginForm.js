import React, { Component } from 'react';
import FormValidator from "./FormValidator"

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator([
      // Employee email validation message
      {
        field: 'loginmail',
        method: 'isEmpty',
        validWhen: false,
        message: 'Email is required.'
      },
      {
        field: 'loginmail',
        method: 'isEmail',
        validWhen: true,
        message: 'This is not a valid email.'
      },
      // Password validation message
      {
        field: 'loginpassword',
        method: 'isEmpty',
        validWhen: false,
        message: 'Password is required.'
      }
    ]);

    this.state = {
      loginmail: '',
      loginpassword: '',
      validation: this.validator.valid()
    };

    this.submitted = false;
  }

  passwordMatch = (confirmation, state) => (state.password === confirmation);

  handleInputChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
      // Handle actual form submission here
    }
  }

  render() {
    let validateLogin = this.submitted ?
    this.validator.validate(this.state) :
    this.state.validation;

    return(
      <div className="loginBox">
      <h1>Log In Here</h1>
      <form className="needs-validation position" novalidate>
          <p>Employee email</p>
          <input type="email" className="form-control" id="loginMail" name="loginmail" onChange={this.handleInputChange} placeholder="Enter Employee email Here" />
          <span className="errorMessage">{validateLogin.loginmail.message}
          </span>
          <p>Password</p>
          <input type="password" className="form-control" id="loginPassword" name="loginpassword" onChange={this.handleInputChange} placeholder="Enter Password Here" required />
          <span className="errorMessage">{validateLogin.loginpassword.message}
          </span>
          <input type="submit" name="login" onClick={this.handleFormSubmit} value="Login" />
          <a href="/">Forgot Password?<span></span>|<span></span>Register new company</a>
      </form>
  </div>
    );
  }
}

export default LoginForm;

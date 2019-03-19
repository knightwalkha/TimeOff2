import React, {Component} from "react"

const emailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

const formValid = ({formErrors, ...rest}) => {
    let valid = true;
  
    // validate form errors being empty
    Object.value(formErrors).forEach(val => {val.length > 0 && (valid = false);});
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {val === null && (valid = false);});
  
    return valid;
}

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
            formErrors: {
                email: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if(formValid(this.state)) {
            console.log(`
            --SUBMITTING--
            Email: ${this.state.email}
            Password: ${this.state.password}
            `);
        } else {
            console.error("FORM INVALID -DISPLAY ERROR MESSAGE")
        }
    };

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'email':
                formErrors.email = emailRegex.test(value) && value.length > 0 ? "" : "invalid email address";
                break;
            case 'password':
                formErrors.password = value.length < 2 && value.length > 0 ? "" : "minimum 2 characters required";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        const { formErrors} = this.state;
    
    return (
        <div className="login-box">
            <h1>Login Here</h1>
            <form>
                <p>Employee email</p>
                <input type="text" className={formErrors.email.length > 0 ? "error" : null} placeholder="Enter Email Here" name="email" noValidate onChange={this.handleChange} />
                {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                )}
                <p>Password</p>
                <input type="password" name="password" placeholder="Enter Password" />
                {formErrors.password.length > 0 ? "error" : null} placeholder="Enter Password Here" name="password" noValidate onChange={this.handleChange} />
                {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                )}
                <input type="submit" name="submit" value="Login" />
                <a href="/">Forget Password?</a>
            </form>
        </div>
    );
}

export default LoginForm;
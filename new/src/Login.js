import React from "react";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";

function Login() {
    return (
        <div>
            <LoginHeader />
            <LoginForm />
            <LoginFooter />
        </div>
    )
} 

export default Login;
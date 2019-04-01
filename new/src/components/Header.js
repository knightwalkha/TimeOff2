import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Login from "../Login";

function Header() {
    return (
        <BrowserRouter>
            <Route path="/Login.js" component={Login.js} />
            <nav class="navbar navbar-expand-lg">
                <div class="logo">
                    <a class="navbar-brand" href="/"><strong>TimeOff.Management</strong></a>
                </div>
                <div class="collapse navbar-collapse" id="navbarMenu1">
                    <ul class="navbar-nav ml-auto">
                        <li>
                            Pricing
                        </li>
                        <li>
                            <a class="btn btn-outline-primary btn-sm" href="/Login.js" role="button">Log in</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </BrowserRouter>
    )
}


export default Header;
import React from "react"

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="logo">
                    <a class="navbar-brand" href="/"><strong>TimeOff.Management</strong></a>
                </div>
                <button class="navbar-toggler" data-toggle="collapse" data-target="navbarMenu">
                    <span class="navbar-toggler-icon" id="span"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarMenu1">
                    <ul class="navbar-nav ml-auto">
                        <li>
                            Pricing
                        </li>
                        <li>
                            <a class="btn btn-outline-primary btn-sm" href="/Login" role="button">Log in</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default Header;
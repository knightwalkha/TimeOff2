import React from "react"

function MainContent () {
    return (
        <div className="jumbotron">
            <h1><strong>TimeOff.Management</strong></h1>
            <h2>Open Source,simple yet powerful absence management software for small and medium size businesses.</h2>
            <p>
                <a class="btn btn-primary btn-lg" href="./Signup">Sign Up</a>
            </p>
            <section>
                <div className="container">
                    <h1 className="heading">Take that leave</h1>
                    <div className="card-wrapper">
                        <div className="card">
                            <img src="/images/vacation.jpg" alt="card img" className="card-img" />
                            <h1>Take a vacation</h1>
                        </div>
                        <div className="card">
                            <img src="/images/medicine.jpg" alt="card-img" className="card-img" />
                            <h1>Go for a medical check-up</h1>
                        </div>
                        <div className="card">
                            <img src="/images/vacation.jpg" alt="card img" className="card-img" />
                            <h1>Getting married</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainContent;
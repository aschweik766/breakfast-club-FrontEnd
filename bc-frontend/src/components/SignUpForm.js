import React, { useState } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"

function SignUpForm() {

    const [loginInfo, setLoginInfo] = useState(
        {
            fullName: " ",
            username: " ",
            email: " ",
            password: " "
        }
    )

    // changeLoginInfo(event) {
    //     this.setLoginInfo({
    //         fullName:event.target.value,
    //         username:event.target.value,
    //         email:event.target.value,
    //         password:event.target.value,
    //     })
    // }

    return (
        <div>
            <div className="container">
                <div className="form-div">
                    <form>
                        <input type="text"
                            placeholder="Full Name"
                            onChange={this.changeLoginInfo}
                            value={this.state.fullName}
                            className="form-control form-group" />

                        <input type="text"
                            placeholder="Username"
                            onChange={this.changeLoginInfo}
                            value={this.state.username}
                            className="form-control form-group" />

                        <input type="text"
                            placeholder="Email"
                            conChange={this.changeLoginInfo}
                            value={this.state.email}
                            className="form-control form-group" />

                        <input type="password"
                            placeholder="Password"
                            conChange={this.changeLoginInfo}
                            value={this.state.password}
                            className="form-control form-group" />

                        <input type="submit" className="btn btn-danger btn-block" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm
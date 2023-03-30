import React from 'react'
import { Link } from 'react-router-dom'

export default function SignInPage() {
    return (
        <div className="text-center login-body m-5 auto">
        <div className="login-form">
            <h2 className="title-sign">Log in </h2>
            <form className="form" action="/home">
                <p className="paragraph">
                    <label className="labels">Username </label><br/>
                    <input className="text-area"type="text" placeholder="Enter username" />
                </p>
                    <label ClassName="labels">Password</label><br></br>
                    <input className="text-area2" type="text" placeholder="Enter password" /><br></br>

                    <Link to="/forget-password"><label className="labels2">Forget password?</label></Link>
                              <p> <Link to="/register">Create an account</Link>.</p>

                <p className="paragraph">
                    <button className="sub_btn" type="submit">login</button>


                </p>
            </form>
        
                {/* <p><Link to="/">Back to Homepage</Link>.</p> */}
        </div>
        </div>
    )
}

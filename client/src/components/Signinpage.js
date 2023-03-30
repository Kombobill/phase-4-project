import React from 'react'
import { Link } from 'react-router-dom'

export default function SignInPage() {
    return (
        <div className="form">
        <div className="login-form">
            <h2 className="title-sign">Login </h2>
            <form className="form" action="/homepage">
                <p className="paragraph">
                    <label className="labels">Username</label><br/>
                    <input type="text" placeholder="enter username" required />
                </p>
                <p className="paragraph">
                    <label ClassName="labels">Password</label>
                    <Link to="/forget-password">
                        <label className="right-label"></label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                    <button ClassName="sub_btn" type="submit">sign
                    <Link to="/homepage"></Link></button>

            </form>
            <footer 
                 className="paragraph">? <Link to="/register">Create an account</Link>.
                <p><Link to="/">Back to login</Link>.</p>
            </footer>
        </div>
        </div>
    )
}

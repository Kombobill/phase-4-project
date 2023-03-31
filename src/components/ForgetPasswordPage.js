import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgetPasswordPage() {
    return (
        <div className="forget">
            <h2>Reset your password</h2>
            <h3 className="reset-p">To receive reset instructions:</h3>
            <form action="/login">
                <p>
                    <label className="user">Email address</label><br/>
                    <input className="text-area4" type="email" placeholder="Enter email" required />
                </p>
                <p>
                    <button className="sub_btn4" type="submit">Reset password</button>
                </p>
            </form>
            <footer>
                <p><Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Login</Link>.</p>
            </footer>
        </div>
    )
}

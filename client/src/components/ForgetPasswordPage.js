import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgetPasswordPage() {
    return (
        <div className="forget">

            <h3 className="reset-p">To receive reset instructions:</h3>

            <form id='reset-password-form'>

                <h2>Reset your password</h2>

                <div className='row mb-3'>
                    <label className="form-label">Email address</label><br/>
                    <input className="form-control" type="email" placeholder="Enter email" required />
                </div>

                <div>
                    <button className="btn btn-primary" type="submit">Reset password</button>
                </div>
                
                <p className='form-text'>Dont have an account ?<Link to="/register">Create an account</Link>.</p>
                <p className='form-text'><Link to="/">Back to Login</Link>.</p>

            </form>
           
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function SignInPage() {
    return (
        <div className="login-form">

            <h2>Log in </h2>

            <form className="form" action="/home">

                <div className="row mb-3">
                    <label className="form-label">Username </label>
                    <input className="form-control"type="text" placeholder="Enter username" />
                </div>

                <div className='row mb-3'>
                    <label ClassName="form-label">Password</label>
                    <input className="form-control" type="password" placeholder="Enter password"/>
                </div>

                <p>Don't have an account?<Link to='/register'> Create an account.</Link></p>
                    
                    <button className="btn btn-primary" type="submit">login</button>
            </form>
        
        </div>
    )
}

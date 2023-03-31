import React from 'react'
import '../styling/login.css'
import { Link } from 'react-router-dom'

export default function SignInPage() {
    return (
        <div id="login-page">

            <form id='login-form' >

                <h2 style={{textAlign: 'center'}}>Log in </h2>

                <div className="row mb-3">
                    <label className="form-label">Username </label>
                    <input className="form-control"type="text" placeholder="Enter username" />
                </div>

                <div className='row mb-3'>
                    <label ClassName="form-label">Password</label>
                    <input className="form-control" type="password" placeholder="Enter password"/>
                </div>

                <p>Don't have an account?<Link to='/register'> Create an account.</Link></p>
                    
                <div style={{textAlign: 'center'}}>
                    <button className="btn btn-primary" type="submit" style={{width: '230px'}}>Log In</button>
                </div>

            </form>
        
        </div>
    )
}

import React, {useState} from 'react'
import '../styling/login.css'
import { Link } from 'react-router-dom'

export default function SignInPage() {

    const[username, setUserame] = useState('')
    const[password, setPassword] = useState('')

    const logInData = {name: username, password}

    function handleLogin(e){
        e.preventDefault()
        console.log(logInData)
    }

    return (
        <div id="login-page">

            <form id='login-form'onSubmit={handleLogin} >

                <h2 style={{textAlign: 'center'}}>Log In </h2>

                <div className="row mb-3">
                    <label className="form-label">Username </label>
                    <input className="form-control"type="text" placeholder="Enter username" required onChange={e => setUserame(e.target.value)}/>
                </div>

                <div className='row mb-3'>
                    <label className="form-label">Password</label>
                    <input className="form-control" type="password" placeholder="Enter password" autoComplete='true' required onChange={e => setPassword(e.target.value)}/>
                </div>

                <p>Don't have an account?<Link to='/register'> Create an account.</Link></p>
                    
                <div style={{textAlign: 'center'}}>
                    <button className="btn btn-primary" type="submit" style={{width: '230px'}}>Log In</button>
                </div>

            </form>
        
        </div>
    )
}

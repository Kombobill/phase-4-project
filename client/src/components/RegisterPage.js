import React from 'react'
import '../styling/register.css'
import { Link } from 'react-router-dom'

export default function SignUpPage() {

    return (
        <div id='signup-page'>
            
            <form id="signup-form">

                <h2 style={{textAlign: 'center'}}>Sign Up</h2>

                <div className='row mb-3'>
                    <label className="form-label">Username</label>
                    <input className="form-control" type="text" placeholder="Enter username" required/>
                </div>

                <div className='row mb-3'>
                    <label className="form-label">Password</label>
                    <input  className="form-control"type="password" placeholder=" password" required/>
                </div>

                <div className='row mb-3'>

                    <div className='col-6'>
                        <label className="form-label">Medical condition</label>
                        <input  className="form-control"type="text" placeholder="Enter condition"/>
                    </div>

                    <div className='col-6'>
                        <label className="form-label">Nurse</label>
                        <select  className="form-select">
                            <option value="option1">Clinical Nurse Specialist</option>
                            <option value="option2">Critical Care Nurse</option>
                            <option value="option3">Geriatric Nursing</option>
                            <option value="option3">Mental Health Nurse</option>
                        </select> 
                    </div>
                    
                </div>
                
                <p>Already have an account. <Link to='/'>Back to Log in</Link></p>
              
                <div>
                    <button className="btn btn-primary" type="submit">sign in</button>
                </div>

            </form>
        </div>
    )

}

import React from 'react'
import { Link } from 'react-router-dom'



export default function SignUpPage() {

    return (
     <div className="reg">
        <div className="text-center m-5-auto">
            <h2 className="sign">Sign in</h2>
            <h5 className="create">Create your personal account</h5>
            <form className="sign-form" action="/home">
                <p>
                    <label className="user">Username</label><br/>
                    <input className="text-area3" type="text" placeholder="Enter username" required/>
                </p>
                <p>
                    <label className="user">Password</label><br/>
                    <input  className="text-area3"type="text" placeholder="Enter password" required/>
                </p>
                <p>
                    <label className="user">Medical condition</label><br/>
                    <input  className="text-area3"type="text" placeholder="Enter condition"/>
                    <p className="user">Nurse</p>
                    <select  className="text-area3">
                <option value="">Select a nurse------</option>
                <option value="option1">Clinical Nurse Specialist</option>
                <option value="option2">Critical Care Nurse</option>
                <option value="option3">Geriatric Nursing</option>
                <option value="option3">Mental Health Nurse</option>
                             </select>
                    {/* <input type="text" placeholder="Enter Nurse Name"/> */}
                </p>
                
              
                <p>
                    <button className="sub_btn" type="submit">sign in</button>
                </p>
            </form>
            <footer>
                <p className="footer"><Link to="/">Back to Login</Link>.</p>
            </footer>
        </div>
        </div>
    )

}

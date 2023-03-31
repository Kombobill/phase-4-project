import React from 'react'
import { NavLink } from 'react-router-dom'


export default function NavBar(){
    return(
        <ul className="navbar">
                <NavLink className={'navbar-brand'} to='/'>Central Hospital</NavLink>
                <div className='justify-content-center'>
                    <NavLink className={'nav-link ms-3'} to='/home'>Home</NavLink>
                    <NavLink className={'nav-link ms-3'} to='/home'>Appointments</NavLink>
                </div>
                <div className='justify-content-left flex-auto'>
                   <NavLink className={'nav-link ms-3'} to='/'>Log In</NavLink>
                   <NavLink className={'nav-link ms-3'} to='/register'>Sign Up</NavLink>
                </div> 
        </ul>
    )
}
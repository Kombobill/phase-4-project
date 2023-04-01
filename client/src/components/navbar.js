import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


export default function NavBar(){

    const navigate = useNavigate()

    function handleLogOut(){
        fetch('/logout',{
            method: 'DELETE',
        })
        .then(response => {
            if(response.ok){
                navigate('/')
            }
        })
    }

    return(
        <ul className="navbar">
                <NavLink className={'navbar-brand'} to='/'>Central Hospital</NavLink>
                <ul className='nav justify-content-center'>
                    <NavLink className={'nav-link ms-3'} to='/appointments'>Appointments</NavLink>
                </ul>
                <div className='nav justify-content-left flex'>
                   <NavLink className={'nav-link ms-3'} to='/'>Log In</NavLink>
                   <NavLink className={'nav-link ms-3'} onClick={handleLogOut}>Log Out</NavLink>
                   <NavLink className={'nav-link ms-3'} to='/register'>Sign Up</NavLink>
                </div> 
        </ul>
    )
}
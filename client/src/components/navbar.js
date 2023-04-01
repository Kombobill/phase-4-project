import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    function handleLogOut() {
        fetch('/logout', {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    // reload the current page after logout to update the state of the app
                    window.location.reload()
                }
            })
    }

    return (
        <ul className="navbar">
            <Link className={'navbar-brand'} to='/'>Central Hospital</Link>
            <ul className='nav justify-content-center'>
                <Link className={'nav-link ms-3'} to='/appointments'>Appointments</Link>
            </ul>
            <div className='nav justify-content-left flex'>
                <Link className={'nav-link ms-3'} to='/'>Log In</Link>
                <button className={'nav-link ms-3'} onClick={handleLogOut}>Log Out</button>
                <Link className={'nav-link ms-3'} to='/register'>Sign Up</Link>
            </div>
        </ul>
    )
}

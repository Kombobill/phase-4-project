import React from 'react';
import { Link } from 'react-router-dom';

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
        <nav className="navbar">
            <Link className="navbar-brand" to='/'>
                <img src='/central_hospital_logo.png' alt="Central Hospital" />
            </Link>
            <ul className='nav justify-content-center'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/appointments'>Appointments</Link>
                </li>
            </ul>
            <div className='nav justify-content-end'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/'>
                        <i className="bi bi-house-door me-1"></i>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/register'>Sign Up</Link>
                </li>
                <li className='nav-item'>
                    <button className='nav-link btn btn-link' onClick={handleLogOut}>Log Out</button>
                </li>
            </div>
        </nav>
    )
}

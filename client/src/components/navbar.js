import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {

    const navigate = useNavigate()

    function handleLogOut() {
        fetch('/logout', {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    navigate('/')
                }
            })
    }

    return (
        <nav className="navbar">
            <Link className="navbar-brand" to='/'>
                <img src='https://raw.githubusercontent.com/Kombobill/phase-4-project/master/client/public/central_hospital_logo.jpg' alt="Central Hospital" style={{ width: '70px', height: '70px' }} />
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
                        
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/'>
                        <i className="bi bi-house-door me-1"></i>
                        Log in
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
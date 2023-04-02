import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../styling/logo.png'

export default function NavBar() {
	const navigate = useNavigate();

	function handleLogOut() {
		fetch('/logout', {
			method: 'DELETE',
		}).then((response) => {
			if (response.ok) {
				navigate('/');
			}
		});
	}

    return (
        <nav className="navbar bg-primary">

            <Link className="navbar-brand text-light" to='/'>
                <img src={logo} alt="hospital logo" style={{ width: '169px', height: '46px' }} />
            </Link>

            <ul className='nav justify-content-center'>
                    <Link className='nav-link text-light' to='/appointments'>Appointments</Link>
                    <Link className='nav-link text-light' to='/doctors'>Doctors</Link>
            </ul>

            <ul className='nav justify-content-end'>
                    <Link className='nav-link text-light' to='/login'>Log in</Link>
                    <Link className='nav-link text-light' to='/register'>Sign Up</Link>
                    <button className='nav-link btn btn-link text-light' onClick={handleLogOut}>Log Out</button>
            </ul>

        </nav>
    )
}

import React, { useState } from 'react';
import '../styling/login.css';
import { Link, useNavigate } from 'react-router-dom';

export default function SignInPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);

	const navigate = useNavigate();

	const logInData = { name: username, password };

	function handleLogin(e) {
		e.preventDefault();
		fetch('/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(logInData),
		}).then((response) => {
			if (response.ok) {
				response.json().then((data) => console.log(data));
				navigate('/appointments');
			} else {
				response.json().then((errorData) => setErrors(errorData.error));
			}
		});
	}

	return (
		<div id="login-page">
			<form id="login-form" onSubmit={handleLogin}>
				<h2 style={{ textAlign: 'center' }}>Log In </h2>
				{errors.length > 0 && (
					<ul style={{ color: 'red' }}>
						<li>{errors}</li>
					</ul>
				)}
				<div className="row mb-3">
					<label className="form-label">Username </label>
					<input
						className="form-control"
						type="text"
						placeholder="Enter username"
						required
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="row mb-3">
					<label className="form-label">Password</label>
					<input
						className="form-control"
						type="password"
						placeholder="Enter password"
						autoComplete="true"
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<p className="form-text">
					<Link to="/forget-password">Forgot Password?</Link>
				</p>
				<p className="form-text">
					Don't have an account?
					<Link to="/register"> Create an account.</Link>
				</p>
				<div style={{ textAlign: 'center' }}>
					<button
						className="btn btn-primary"
						type="submit"
						style={{ width: '230px' }}
					>
						Log In
					</button>
				</div>
			</form>
		</div>
	);
}

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Login({ onLogin }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(null);


  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch(`/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
          setSuccess(user);
        });
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
          console.log(err);
        });
      }
    });
    setName('');
    setPassword('');
  }

  if (success === !null) return <NavLink to={'/me'} />;

  return (
    <div>
      <h1 className="title-sign">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="labels" htmlFor='username'>Username</label>
        <input className="text-area"
          type='text'
          id='username'
          autoComplete='off'
          placeholder='e.g Joe'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label ClassName="labels" htmlFor='password'>Password</label>
        <input className="text-area"
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="sub_btn" type='submit'>{isLoading ? 'Loading...' : 'Login'}</button>

        {errors.map((err) => (
          <li key={err}>{err}</li>
        ))}
      </form>
      <div className="for-pass" >
      <Link to="/forget-password"><label className="labels2">Forgot password?</label></Link>
                              <p> <Link to="/register">Create an account</Link>.</p>
        <hr />
      
      </div>
    </div>
  );
}

export default Login;

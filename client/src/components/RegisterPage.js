import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function SignUp({ onLogin }) {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [condition, setCondition] = useState('');
  const [nurse, setNurse] = useState('');
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allNurses, setAllNurses] = useState([]);
  const [success, setSuccess] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch(`/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
        password_confirmation: passwordConfirmation,
        condition,
        nurse_id: nurse,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
          setSuccess(user);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  useEffect(() => {
    fetch(`/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
    
        }
    })
      .then((response) => response.json())
      .then((data) => setAllNurses(data));
  }, []);

  if (success === !null) return <NavLink to={`/me`} />;

  return (
    <div >
      <h1 className="title-sign">Signup</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="labels" htmlFor='name'>Username</label>
        <input className="text-area"
          type='text'
          id='name'
          autoComplete='off'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="labels" htmlFor='password'>Password</label>
        <input className="text-area"
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='current-password'
        />
        <label htmlFor='password'>Password Confirmation</label>
        <input className="text-area"
          type='password'
          id='password_confirmation'
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete='current-password'
        />
        <label htmlFor='condition'>Medical condition</label>
        <textarea className="text-area"
          placeholder="Provide medical condtion.."
          rows='3'
          id='bio'
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
        <label  htmlFor='nurse'>Nurse</label>
        <select className="text-area">
  <option value="">--Select a nurse--</option>
  <option value="option1">Registered Nurse</option>
  <option value="option2">Clinical Nurse Specialist</option>
  <option value="option3">Critical Care Nurse</option>
  <option value="option3">ER Nurse</option>
  <option value="option3">Geriatric Nursing</option>
  <option value="option3">Mental Health Nurse</option>

</select>
        {/* ==SELECT== */}
        {/* <select className="text-area"
          name='nurse'
          onChange={(e) => setNurse(e.target.value)}
        >
          <option className='option' hidden>
            Select 
          </option>
          {allNurses.map((nurse) => {
            return (
              <option className='option' key={nurse.id} value={nurse.id}>
                {nurse.name}
              </option>
            );
          })}
        </select> */}
        {/* ==SELECT== */}
        <button  className="sub_btn" type='submit'>{isLoading ? 'Loading...' : 'Sign Up'}</button>
        <p><Link to="/">Back to Login</Link>.</p>

        {errors.map((err) => (
          <li style={{ color: 'red' }} key={err}>
            {err}
          </li>
        ))}
      </form>
      <div>
        <hr />
        <p>

        </p>
      </div>
    </div>
  );
}

export default SignUp;

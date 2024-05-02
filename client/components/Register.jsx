import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch ('/api/users/', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({firstName, lastName, email, password}),
    })

    if(res.ok){
        const user = await res.json();
        console.log(user)
        navigate('/login');
    }
  };

  return (
    <>
        <Header />
    <div className="form-container">
      <form onSubmit={handleSubmit} method='post' action='submit' id='register-form' className="login-form">
        {/* <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} /> */}
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
    </>
  );
};

export default Register;
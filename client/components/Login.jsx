import Header from "./Header";
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch ('/api/users/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password}),
    })

    if(res.ok){
      const user = await res.json();
      localStorage.setItem('userToken', user.token);
      console.log(user)
      navigate('/');
    }
  };

  return (
    <div >
      <Header />
      <form onSubmit={handleSubmit} className="login-page" id="login-form">
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit" id="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
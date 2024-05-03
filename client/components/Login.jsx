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
    <>
    <Header />
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
};

export default Login;

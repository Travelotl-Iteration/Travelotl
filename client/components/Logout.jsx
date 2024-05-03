import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await fetch ('/api/users/logout', {
      method: 'get',
    })
    if(res.ok){
      navigate('/login');
    }
  };
  handleLogout();
};

export default Logout;
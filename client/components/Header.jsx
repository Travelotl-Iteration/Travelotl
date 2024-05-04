import { useNavigate } from 'react-router-dom';
import React from 'react';

const Header = () => {
  const navigate = useNavigate();
    function TravelotlClick(){
        navigate('/');
    }

      function ManagerClick() {
        navigate('/manager');
      }
    
      function AboutClick() {
        navigate('/about');
      }
  
      function LoginClick() {
        navigate('/login');
      }

      function LogoutClick() {
        navigate('/logout');
      }
      function RegisterClick() {
        navigate('/register');
      }
    
  return (
    <div className="header-container " >
      <div className=" text-3xl font-bold font-serif"  onClick={TravelotlClick}>Travelotl</div>
      <div className='inline-block' id="manager" onClick={ManagerClick}>
        Manager
      </div>
      <div className='inline-block'  id="about" onClick={AboutClick}>
       About
      </div>
      <div className='inline-block'  id="login" onClick={LoginClick}>
      Login
      </div>
      <div className='inline-block'  id="register" onClick={RegisterClick}>
        Register
      </div>
      <div className='text-end m-2 p-5' onClick={LogoutClick}>
      Logout
      </div>
    </div>
  );
};

export default Header;
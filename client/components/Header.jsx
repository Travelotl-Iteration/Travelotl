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
      function RegisterClick() {
        navigate('/register');
      }
    
  return (
    <div className="header-container " >
      <div className=" text-3xl font-bold font-serif text-center"  onClick={TravelotlClick}>Travelotl</div>
      <div className='text-right m-2' onClick={ManagerClick}>
        Manager
      </div>
      <div className='text-right m-2' onClick={AboutClick}>
       About
      </div>
      <div className='text-center m-2' onClick={LoginClick}>
      Login
      </div>
      <div className='text-center m-2' onClick={RegisterClick}>
        Register
      </div>
    </div>
  );
};

export default Header;
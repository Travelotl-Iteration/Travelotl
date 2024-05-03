import Header from "./Header";
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';
import Cookies from 'js-cookie';
 
const Main = () => {
  const navigate = useNavigate();

  const [jwt, setJwt] = useState(null);

  useEffect(() => {
    const jwt = Cookies.get('jwt');
    if (!jwt) navigate('login')
    else setJwt(jwt);
  }, [])
  
  function GO(){
      navigate('/form')
  }
  
  return (
    <div>
      <Header />
      <p>Let us plan the trip of your dreams...</p>
      <button id='start' onClick={GO}>Click here to get started... </button>
    </div>
  );
};

export default Main;

import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  
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

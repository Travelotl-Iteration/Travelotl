import Header from "./Header";
import { useNavigate } from "react-router-dom";
import palmLogo from '../assets/palm_logo.jpeg';

export default function Main() {
  const navigate = useNavigate();

  function GO(){
      navigate('/form');
  }

  return (
      <>
          <Header />
          <section className="flex items-center justify-center h-screen bg-peach" >
              <div>
                  <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 text-center">
                      <p>Let us plan the trip of your dreams...</p>
                  </blockquote>
                  <button id='start' onClick={GO} className="mt-8 mx-auto text-center">
                      <img className="mx-auto" src={palmLogo} alt="palm tree version of logo" style={{ borderRadius: '50%' }} />
                  </button> 
              </div>
          </section>
      </>
  );
}

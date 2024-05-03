import Header from "./Header";
import { useNavigate } from "react-router-dom";
import palmLogo from '../assets/palm_logo.jpeg';
// const Main = () => {
//   const navigate = useNavigate();
  
//   function GO(){
//       navigate('/form')
//   }
  
//   return (
//     <div>
//       <Header />
//       <p>Let us plan the trip of your dreams...</p>
//       <button id='start' onClick={GO}>Click here to get started... </button>
//     </div>
//   );
// };

// export default Main;
// export default function Main() {
//     const navigate = useNavigate();
  
//   function GO(){
//       navigate('/form')
//   }
  
//   return (
//     <>
//     <Header />
//     <section className="relative isolate overflow-hidden bg-white px-4 py-20 sm:py-20 lg:px-4">
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
//       <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
//       <div className="mx-auto max-w-2xl lg:max-w-4xl">
//       <blockquote className=" text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
//           <p>
//               Let us plan the trip of your dreams...
//             </p>
//             </blockquote>
//           <button id='start' onClick={GO} className="mx-auto text-center">
//         <img className="mx-auto " src={palmLogo} alt="palm tree version of logo" style={{ borderRadius: '50%' }} />
//         <figure className="mt-10">
//         </figure>
//      </button> 
//       </div>
//     </section>
//     </>
//   )
// }
export default function Main() {
  const navigate = useNavigate();

  function GO(){
      navigate('/form');
  }

  return (
      <>
          <Header />
          <section className="flex items-center justify-center h-screen bg-peach">
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

import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import Itinerary from "./Itinerary";

const ItineraryPage = () => {
  const itinerary = useSelector(state => state.itinerary.itinerary);
  const hotels = useSelector(state => state.itinerary.hotels);
  const navigate = useNavigate();

  const mapViewClick = (e) => {
    e.preventDefault();
    console.log('clicked');
    navigate('/map');
  };

  console.log("itinerary page:", itinerary);
  console.log('itinerary page hotels: ', hotels);
  return (
    <div>
      <Header />
      <h2>Your Itinerary</h2>
      <button onClick={mapViewClick} className="text-right">Map View</button>
      <Itinerary itinerary={itinerary} hotels={hotels} />
    </div>
  );
};

export default ItineraryPage;

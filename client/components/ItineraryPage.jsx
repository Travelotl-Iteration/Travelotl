import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import Itinerary from "./Itinerary";

const ItineraryPage = () => {
  const itinerary = useSelector(state => state.itinerary.itinerary);
  const hotels = useSelector(state => state.itinerary.hotels);
  const navigate = useNavigate();
  const mapViewClick = () => {
    console.log('clicked');
    navigate('/map');
  };

  console.log("itinerary page:", itinerary);
  console.log('itinerary page hotels: ', hotels);
  return (
    <div>
      <Header />
      <h2>Your Itinerary</h2>
      <Itinerary itinerary={itinerary} hotels={hotels} />
      <button onClick={mapViewClick}>Map View</button>
    </div>
  );
};

export default ItineraryPage;

import { useSelector } from "react-redux";

import Header from "./Header";
import Itinerary from "./Itinerary"


const ItineraryPage = () => {
  const itinerary = useSelector(state => state.itinerary.itinerary);
  const hotels = useSelector(state => state.itinerary.hotels);
  return (
    <div>
      <Header />
      <h2>Your Itinerary</h2>
      <Itinerary itinerary={itinerary} hotels={hotels} />
    </div>
  );
};

export default ItineraryPage;
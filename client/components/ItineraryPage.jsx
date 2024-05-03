import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import Schedule from './schedule/Schedule';
import Hotels from './hotels/Hotels';
import Restaurants from './restaurants/Restaurants';


const ItineraryPage = () => {
  const itinerary = useSelector(state => state.itinerary.itinerary);
  const hotels = useSelector(state => state.itinerary.hotels);
  const restaurants = useSelector(state => state.itinerary.restaurants);

  console.log('restaurants are', restaurants)
  const [scheduleClicked, setScheduleClicked] = useState(true);
  const [hotelsClicked, setHotelsClicked] = useState(false);
  const [restaurantsClicked, setRestaurantsClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if (menuOpen) setMenuOpen(false);
  }

  const handleScheduleClick = () => {
    setScheduleClicked(true);
    setHotelsClicked(false);
    setRestaurantsClicked(false);
  }

  const handleHotelsClick = () => {
    setScheduleClicked(false);
    setHotelsClicked(true);
    setRestaurantsClicked(false);
  };

  const handleRestaurantsClick = () => {
    setScheduleClicked(false);
    setHotelsClicked(false);
    setRestaurantsClicked(true);
  }
  const mapViewClick = (e) => {
    e.preventDefault();
    console.log('clicked');
    navigate('/map');
  };
  return (
    <div>
      <Header />
      <h2>Your Itinerary</h2>
      <Itinerary itinerary={itinerary} hotels={hotels} />
      <button onClick={mapViewClick} itinerary={itinerary}>Map View</button>
    </div>
  );
};

export default ItineraryPage;

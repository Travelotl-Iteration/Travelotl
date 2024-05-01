import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import Schedule from './schedule/Schedule';
import Hotels from './hotels/Hotels';

const ItineraryPage = () => {
  const itinerary = useSelector(state => state.itinerary.itinerary);
  const hotels = useSelector(state => state.itinerary.hotels);

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

  return (
    <div onClick={closeMenu} className='itineraryPage'>
      <div style={{ position: 'relative' }} >
        <IoMenu style={{ position: 'absolute', fontSize: '2.5em', color: '#4c4c4c', margin: '10px'}} onClick={toggleMenu} />
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => navigate('/manager')}>Home</button>
          <button onClick={handleScheduleClick}>Schedule</button>
          <button onClick={handleHotelsClick}>Hotels</button>
          <button onClick={handleRestaurantsClick}>Restaurants</button>
          <button onClick={() => navigate('/map')}>Map</button>
        </div>
      </div>
      {scheduleClicked && <Schedule />}
      {hotelsClicked && <Hotels hotels={hotels} />}
    </div>
  );
};

export default ItineraryPage;

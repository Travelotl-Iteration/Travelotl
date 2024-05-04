import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Map, APIProvider } from '@vis.gl/react-google-maps';
import ControlPanel from './ControlPanel';
import RestaurantMarker from './RestaurantMarker';
import HotelMarker from './HotelMarker';
import Header from '../Header.jsx';
const apiKey = 'AIzaSyBIrtoIQCvA4M7fKqg0UmZM5AZnSsJwVhk';

function MapUI() {
  const [restaurantMarkers, setRestaurantMarkers] = useState([]);
  const [hotelMarkers, setHotelMarkers] = useState([]);
  const [center, setCenter] = useState();
  const [showRestaurants, setShowRestaurants] = useState(false);
  const [showHotels, setShowHotels] = useState(false);
  const restaurants = useSelector(state => state.itinerary.restaurants);
  const hotels = useSelector(state => state.itinerary.hotels);

  useEffect(() => {
    // Declare async restaurant marker generator function to be invoked at end of useEffect hook
    const makeRestaurantMarkers = async (restaurants) => {
      // Get the coordinates of all the restaurants
      const markerInfo = [];
      for (const restaurant of restaurants) {
        try { 
          const address = `${restaurant.address}, ${restaurant.zipcode}`;
          const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
          const response = await fetch(geocodingUrl);
          const responseObj = await response.json();
          const coords = responseObj.results[0].geometry.location;
          markerInfo.push({coords: coords, name: restaurant.name});
        } catch (error) { console.log('error geocoding restaurant coordinates: ', error) };
      };
      // Set map center to coords of first restaurant
      setCenter(markerInfo[0].coords);
      // Create a marker for each restaurant
      const markers = [];
      markerInfo.forEach((marker,index) => {
        markers.push(<RestaurantMarker key={index} coords={marker.coords} restaurantName={marker.name} />)
      })
      setRestaurantMarkers(markers);
    };
    // Declare async restaurant marker generator function to be invoked at end of useEffect hook
    const makeHotelMarkers = async (hotels) => {
      // Get the coordinates of all the hotels
      const markerInfo = [];
      for (const hotel of hotels) {
        try { 
          const address = `${hotel.address}, ${hotel.zipcode}`;
          const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
          const response = await fetch(geocodingUrl);
          const responseObj = await response.json();
          const coords = responseObj.results[0].geometry.location;
          markerInfo.push({coords: coords, name: hotel.name});
        } catch (error) { console.log('error geocoding hotel coordinates: ', error) };
      };
      // Create a marker for each hotel
      const markers = [];
      markerInfo.forEach((marker,index) => {
        markers.push(<HotelMarker key={index} coords={marker.coords} hotelName={marker.name} />)
      })
      setHotelMarkers(markers);
    };
    // Invoke async function
    makeRestaurantMarkers(restaurants);
    makeHotelMarkers(hotels);
  }, [])

  // Marker button functions
  const handleRestaurantsSwitch = () => {
    setShowRestaurants(!showRestaurants);
  };

  const handleHotelsSwitch = () => {
    setShowHotels(!showHotels);
  };

  return (
    <APIProvider apiKey={apiKey}>
      {/* Conditionally render the map and markers once the center has been determined */}
      {center && 
      <div>
        <Header />
        <ControlPanel handleRestaurantsSwitch={handleRestaurantsSwitch} handleHotelsSwitch={handleHotelsSwitch}/>
        <Map
          style={{width: '100vw', height: '100vh'}}
          defaultCenter={center}
          defaultZoom={15}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          mapId={'d96917bb7cbafeb6'}
          >
          {showRestaurants && restaurantMarkers} 
          {showHotels && hotelMarkers}
        </Map>
      </div>}
    </APIProvider>
  );
}

export default MapUI;
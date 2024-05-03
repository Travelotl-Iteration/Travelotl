import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Map, APIProvider, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const apiKey = 'AIzaSyBIrtoIQCvA4M7fKqg0UmZM5AZnSsJwVhk';

function MapUI() {
  const [markers, setMarkers] = useState([]);
  const [center, setCenter] = useState()
  const restaurants = useSelector(state => state.itinerary.restaurants);

  useEffect(() => {
    // Make an array of restaurant addresses
    const addressArray = [];
    restaurants.forEach(restaurant => {
      addressArray.push(`${restaurant.address},${restaurant.zipcode}`)
    });
    // Declare async function to be invoked at end of useEffect hook
    const getCoords = async (addressArray) => {
      // Get the coordinates of all the restaurants
      const markerCoords = [];
      for (const address of addressArray) {
        try { 
          const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
          const response = await fetch(geocodingUrl);
          const responseObj = await response.json();
          const coords = responseObj.results[0].geometry.location;
          markerCoords.push(coords);
        } catch (error) { console.log('error geocoding restaurant coordinates: ', error) };
      };
      // Set map center to coords of first restaurant
      setCenter(markerCoords[0]);
      // Create a marker for each restaurant
      const markers = [];
      markerCoords.forEach(coords => {
        markers.push(<AdvancedMarker
          position={coords}
          title={'AdvancedMarker with customized pin.'}>
          <Pin
            background={'#22ccff'}
            borderColor={'#1e89a1'}
            glyphColor={'#0f677a'}></Pin>
        </AdvancedMarker>)
      })
      setMarkers(markers);
    };
    // Invoke async function
    getCoords(addressArray);
  }, [])

  return (
    <APIProvider apiKey={apiKey}>
      {/* Conditionally render the map and restaurant markers once the center has been determined */}
      {center && <Map
        style={{width: '100vw', height: '100vh'}}
        defaultCenter={center}
        defaultZoom={15}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapId={'d96917bb7cbafeb6'}
        >
        {markers}
      </Map>}
    </APIProvider>
  );
}

export default MapUI;

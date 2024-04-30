import React from 'react';
import { APIProvider, Map, } from '@vis.gl/react-google-maps';

const MapUI = () => {
  const test_position_of_hotel_marker = {lat: 61.2176, lng: -149.8997};

  return (
    <APIProvider apiKey={'AIzaSyD-QBFaA4K7IAT-N4hiOsUbmrt2CNSG9TA'}>
      <Map style={{ width: '100vw', height: '100vh' }}
        defaultCenter={{ lat: 40.747761, lng: -73.993362 }}
        defaultZoom={3}
        gestureHandling={'greedy'}
        disableDefaultUI={true} >
        </ Map>
    </APIProvider>
  );
};

export default MapUI;

//  export default MapUI;

// import dotenv from 'dotenv'
// const dotenv = require('dotenv')
// dotenv.config({ path: '../../config.env' });

// const MapUI = () => {
//   const { isLoaded } = useLoadScript({ googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY });

//   console.log('google maps api', import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

//   return (
//     <Fragment>
//       {isLoaded && (
//         <GoogleMap 
//           style={{ width: '100vw', height: '100vh' }}
//           defaultCenter={{ lat: 22.54992, lng: 0 }}
//           defaultZoom={3}
//           gestureHandling={'greedy'}
//           disableDefaultUI={true}
//         />
//       )}
//     </Fragment>
//   );
// };

// export default MapUI;


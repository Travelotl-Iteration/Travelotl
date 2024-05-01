import React, { Component } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
// import { Marker } from 'react-google-maps';
// import { connect } from 'react-redux';
// import { GoogleApiWrapper, InfoWrapper, Map, Marker} from 'google-map-react'
// const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

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

// import _ from "lodash";
// import React from "react";
// import { compose, withProps } from "recompose";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
// } from "react-google-maps";
// import Header from "./Header";

// const MyMapComponent = compose(
//   withProps({
//     googleMapURL:
//       "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />
//   }),
//   withScriptjs,
//   withGoogleMap
// )(props => (
//   <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//     <Marker position={{ lat: -34.397, lng: 150.644 }} />
//   </GoogleMap>
// ));

// const enhance = _.identity;

// const MapUI = () => [
//   <Header key="header" />,

//   <MyMapComponent key="map" />
// ];

// export default enhance(MapUI);
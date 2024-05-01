import React, { Component, useEffect} from 'react';
import {
  APIProvider,
  Map,
  Marker, useMap, 
  useMarkerRef
} from '@vis.gl/react-google-maps';// import { Marker } from 'react-google-maps';
// import { connect } from 'react-redux';
// import { GoogleApiWrapper, InfoWrapper, Map, Marker} from 'google-map-react'
// const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

const MyComponent = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // here you can interact with the imperative maps API
  }, [map]);

  return <></>;
};

const MapUI = () => {
  const test_position_of_hotel_marker = {lat: 61.2176, lng: -149.8997};
  const [markerRef, marker] = useMarkerRef();

  useEffect(() => {
    if (!marker) {
      return ;
    }
  }, [marker]);
  return (
    <APIProvider apiKey={'AIzaSyD-QBFaA4K7IAT-N4hiOsUbmrt2CNSG9TA'}>
      <Map style={{ width: '100vw', height: '100vh' }}
        defaultCenter={{ lat: 40.747761, lng: -73.993362 }}
        defaultZoom={3}
        gestureHandling={'greedy'}
        disableDefaultUI={true} 
        >
          <Marker ref={markerRef} position={test_position_of_hotel_marker}/>
        </ Map>
        <MyComponent />
    </APIProvider>
  );
};

export default MapUI;


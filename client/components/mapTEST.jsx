

//WORKING CODE: 
import React, { Component } from 'react';
import { APIProvider, Map, } from '@vis.gl/react-google-maps';
// import { Marker } from 'react-google-maps';
// import { connect } from 'react-redux';
import { Map, Marker} from 'google-map-react'
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
        disableDefaultUI={true} 
        >
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



// const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

// import { Marker } from 'react-google-maps';
// import { connect } from 'react-redux';
// import { GoogleApiWrapper, InfoWrapper, Map, Marker} from 'google-map-react'
// const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

// const MyComponent = () => {
//   const map = useMap();

//   useEffect(() => {
//     if (!map) return;

//     // here you can interact with the imperative maps API
//   }, [map]);

//   return <></>;
// };




// import React, { Component, useEffect} from 'react';
// import {
//   APIProvider,
//   Marker, useMap, 
//   useMarkerRef
// } from '@vis.gl/react-google-maps';
// const { Map } = await google.maps.importLibrary("maps");

// const MapUI = () => {
//   const test_position_of_hotel_marker = {lat: 40.74777, lng: 73.99337};
//   const [markerRef, marker] = useMarkerRef();

//   useEffect(() => {
//     if (!marker) {
//       return ;
//     }
//   }, [marker]);

//   // Default marker with title text (no PinElement).

//   return (
//     <APIProvider apiKey={'AIzaSyD-QBFaA4K7IAT-N4hiOsUbmrt2CNSG9TA'}>
//       <Map style={{ width: '100vw', height: '100vh' }}
//         defaultCenter={{ lat: 40.747761, lng: -73.993362 }}
//         defaultZoom={4}
//         gestureHandling={'greedy'}
//         disableDefaultUI={true} 
//         >
//         </ Map>
        
//         <Marker />
//     </APIProvider>
//   );
// };

// // const MapUI = () => {
// //   const test_position_of_hotel_marker = {lat: 61.2176, lng: -149.8997};

// //   return (
// //     <APIProvider apiKey={'AIzaSyD-QBFaA4K7IAT-N4hiOsUbmrt2CNSG9TA'}>
// //       <Map style={{ width: '100vw', height: '100vh' }}
// //         defaultCenter={{ lat: 40.747761, lng: -73.993362 }}
// //         defaultZoom={3}
// //         gestureHandling={'greedy'}
// //         disableDefaultUI={true} 
// //         >
// //         </ Map>
// //     </APIProvider>
// //   );
// // };


// export default MapUI;
// import React, { useEffect, useState } from 'react';
// import { APIProvider, Map } from '@react-google-maps/api';

// function MapUI() {
//   const [googleMapLoaded, setGoogleMapLoaded] = useState(false);

//   useEffect(() => {
//     const loadGoogleMapScript = () => {
//       const script = document.createElement('script');
//       script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD-QBFaA4K7IAT-N4hiOsUbmrt2CNSG9TA&libraries=places`;
//       script.async = true;
//       script.defer = true;
//       script.onload = () => setGoogleMapLoaded(true);
//       document.body.appendChild(script);
//     };

//     loadGoogleMapScript();

//     return () => {
//       // Cleanup function
//     };
//   }, []);

//   if (!googleMapLoaded) {
//     return <div>Loading...</div>;
//   }

//   const { Map } = google.maps; // Accessing google.maps after it's loaded

//   return (
//     <APIProvider apiKey={'AIzaSyD-QBFaA4K7IAT-N4hiOsUbmrt2CNSG9TA'}>
//       <Map
//         style={{ width: '100vw', height: '100vh' }}
//         defaultCenter={{ lat: 40.747761, lng: -73.993362 }}
//         defaultZoom={4}
//         gestureHandling={'greedy'}
//         disableDefaultUI={true}
//       >
//         {/* Add your markers, polygons, etc. here */}
//       </Map>
//     </APIProvider>
//   );
// }

// export default MapUI;
// import React, { useEffect, useState } from 'react';
// import { GoogleMap } from '@react-google-maps/api';

// function MapUI() {
//   const [mapLoaded, setMapLoaded] = useState(false);
//   const [mapAndMarkerLoaded, setMapAndMarkerLoaded] = useState(false);
//   const [Map, setMap] = useState(null);
//   const [InfoWindow, setInfoWindow] = useState(null);
//   const [AdvancedMarkerElement, setAdvancedMarkerElement] = useState(null);
//   const [scriptLoaded, setScriptLoaded] = useState(false);

//   useEffect(() => {
//     const loadMapsScript = () => {
//       if (!window.google) {
//         const googleMapsScript = document.createElement('script');
//         googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD-QBFaA4K7IAT-N4hiOsUbmrt2CNSG9TA&libraries=places`;
//         googleMapsScript.async = true;
//         googleMapsScript.onload = () => {
//           setScriptLoaded(true);
//         };
//         document.head.appendChild(googleMapsScript);
//       } else {
//         setScriptLoaded(true);
//       }
//     };

//     loadMapsScript();
//   }, []);

//   useEffect(() => {
//     const loadMapAndMarker = async () => {
//       if (scriptLoaded && !mapAndMarkerLoaded && window.google && window.google.maps) {
//         const mapsLibrary = window.google.maps;
//         setMap(mapsLibrary.Map);
//         setInfoWindow(mapsLibrary.InfoWindow);
//         setAdvancedMarkerElement(mapsLibrary.AdvancedMarkerElement);
//         setMapAndMarkerLoaded(true);
//       }
//     };

//     loadMapAndMarker();
//   }, [scriptLoaded]);

//   useEffect(() => {
//     if (mapAndMarkerLoaded) {
//       setMapLoaded(true);
//     }
//   }, [mapAndMarkerLoaded]);

//   return (
//     <>
//       {mapLoaded && (
//         <GoogleMap
//           mapContainerStyle={{ width: '100vw', height: '100vh' }}
//           center={{ lat: 40.747761, lng: -73.993362 }}
//           zoom={4}
//         >
//           {/* Add your markers, polygons, etc. here */}
//         </GoogleMap>
//       )}
//     </>
//   );
// }

// export default MapUI;















// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

// function MyMapComponent() {
//   const [mapLoaded, setMapLoaded] = useState(false);

//   useEffect(() => {
//     const handleMapLoad = () => {
//       setMapLoaded(true);
//     };

//     window.addEventListener('load', handleMapLoad);

//     return () => {
//       window.removeEventListener('load', handleMapLoad);
//     };
//   }, []);

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyD-QBFaA4K7IAT-N4hiOsUbmrt2CNSG9TA">
//       <GoogleMap
//         mapContainerStyle={{ width: '100vw', height: '100vh' }}
//         center={{ lat: 40.747761, lng: -73.993362 }}
//         zoom={4}
//       >
//         {/* Add your markers, polygons, etc. here */}

//       </GoogleMap>
//     </LoadScript>
//   );
// }

// export default MyMapComponent;

/* 

MAP, SAT VIEW, STREET VIEW, ETC, NO MARKERS

*/

// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// function MyMapComponent() {
//   const [mapLoaded, setMapLoaded] = useState(false);

//   useEffect(() => {
//     const handleMapLoad = () => {
//       setMapLoaded(true);
//     };

//     window.addEventListener('load', handleMapLoad);

//     return () => {
//       window.removeEventListener('load', handleMapLoad);
//     };
//   }, []);

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyD-QBFaA4K7IAT-N4hiOsUbmrt2CNSG9TA">
//       <GoogleMap
//         mapContainerStyle={{ width: '100vw', height: '100vh' }}
//         center={{ lat: 40.747761, lng: -73.993362 }}
//         zoom={4}
//       >
//         {/* Add your customized marker */}
//         {mapLoaded && (
//           <Marker
//           //61.2176° N, 149.8997° W
//             position={{ lat: 61.2176, lng: -149.8997}}
//             icon={{
//               url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
//               scaledSize: new window.google.maps.Size(50, 50), // Adjust the size of the marker
//               origin: new window.google.maps.Point(0, 0),
//               anchor: new window.google.maps.Point(25, 50), // Adjust the anchor point if necessary
//             }}
//           />
//         )}
//       </GoogleMap>
//     </LoadScript>
//   );
// }

// export default MyMapComponent;



// //SEARCH BOX RENDERING ON TOP OF MAP
// import React, { useEffect, useState, useRef } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// function MyMapComponent() {
//   const [mapLoaded, setMapLoaded] = useState(false);
//   const [map, setMap] = useState(null);
//   const [searchBox, setSearchBox] = useState(null);
//   const markerRef = useRef(null); // Define markerRef using useRef hook

//   useEffect(() => {
//     const handleMapLoad = () => {
//       setMapLoaded(true);
//       const input = document.getElementById("search-input");
//       setSearchBox(new window.google.maps.places.Autocomplete(input));
//     };

//     window.addEventListener('load', handleMapLoad);

//     return () => {
//       window.removeEventListener('load', handleMapLoad);
//     };
//   }, []);

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   const onPlaceChanged = () => {
//     const place = searchBox.getPlace();
//     if (place.geometry) {
//       map.panTo(place.geometry.location);
//     } else {
//       alert("Place not found");
//     }
//   };

//   return (
//     <div style={{ position: 'relative' }}>
//       <LoadScript googleMapsApiKey="AIzaSyD-QBFaA4K7IAT-N4hiOsUbmrt2CNSG9TA">
//         <GoogleMap
//           mapContainerStyle={{ width: '100%', height: '100vh' }}
//           center={{ lat: 53.54992, lng: 10.00678 }} // change the center to whatever 
//           zoom={8}
//           onLoad={onLoad}
//         >
//           {/* Add your customized marker */}
//           {mapLoaded && (
//             <>
//               <Marker ref={markerRef} position={{ lat: 53.54992, lng: 10.00678}} />

//             </>
//           )}
//         </GoogleMap>
//       </LoadScript>
//       <div style={{ position: 'absolute', top: '100px', left: '10px', zIndex: '1' }}>
//         <input id="search-input" type="text" placeholder="Search..." style={{ width: '200px' }} onChange={onPlaceChanged} />
//       </div>
//     </div>
//   );
// }

// export default MyMapComponent;




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

import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function MyMapComponent() {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const handleMapLoad = () => {
      setMapLoaded(true);
    };

    window.addEventListener('load', handleMapLoad);

    return () => {
      window.removeEventListener('load', handleMapLoad);
    };
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyD-QBFaA4K7IAT-N4hiOsUbmrt2CNSG9TA">
      <GoogleMap
        mapContainerStyle={{ width: '100vw', height: '100vh' }}
        center={{ lat: 40.747761, lng: -73.993362 }}
        zoom={4}
      >
        {/* Add your markers, polygons, etc. here */}
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMapComponent;

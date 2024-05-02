import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

function MyMapComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD-QBFaA4K7IAT-N4hiOsUbmrt2CNSG9TA"
  });

  return (
    <div>
      {!isLoaded && <div>Loading...</div>}
      {isLoaded && (
        <GoogleMap className="map"
          mapContainerStyle={{ width: '100vw', height: '100vh' }}
          center={{ lat: 40.747761, lng: -73.993362 }}
          zoom={4}
          mapId={"559d048485f2b264"}
        >
          <Marker
            position={{ lat: 61.2176, lng: -149.8997 }}
            icon={{
              url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            }}
          />
        </GoogleMap>
      )}
    </div>
  );
}

export default MyMapComponent;

// import React, { useEffect, useState, useRef } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


// function MyMapComponent({ addresses }) {
//   const [mapLoaded, setMapLoaded] = useState(false);
//   const [map, setMap] = useState(null);
//   const [searchBox, setSearchBox] = useState(null);
//   const markerRef = useRef(null);

//   useEffect(() => {
//     const handleMapLoad = () => {
//       setMapLoaded(true);
//       const input = document.getElementById("search-input");
//       const autoComplete = new window.google.maps.places.Autocomplete(input);
//       autoComplete.addListener("place_changed", onPlaceChanged);
//       setSearchBox(autoComplete);
//     };

//     window.addEventListener('load', handleMapLoad);

//     return () => {
//       window.removeEventListener('load', handleMapLoad);
//     };
//   }, []);

//   const onLoad = (map) => {
//     setMap(map);
//     setMapLoaded(true);
//     console.log('on loaded:', map);
//   };


//   const gps_start_LAT = 40.712800;
//   const gps_start_LONG = -74.006000;

//   return (
//     <div style={{ position: 'relative' }}>
//       <LoadScript googleMapsApiKey="AIzaSyD-QBFaA4K7IAT-N4hiOsUbmrt2CNSG9TA">
//         <GoogleMap
//           mapContainerStyle={{ width: '100%', height: '100vh' }}
//           center={{ lat: gps_start_LAT, lng: gps_start_LONG }}
//           zoom={8}
//           onLoad={onLoad}
//           mapId={'e6f7185b209c673a'}
//         >
//           {LoadScript && (
//             <Marker 
//             position={{ lat: 40.747761, lng: -73.993362 }} 
//             icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
//             />
//           )}
//         </GoogleMap>
//       </LoadScript>
//       <div style={{ position: 'absolute', top: '100px', left: '10px', zIndex: '1' }} >
//       </div>
//     </div>
//   );
// }

// export default MyMapComponent;
// import React, { FunctionComponent } from 'react';
// import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
// import React from 'react';
// import {APIProvider, Map, InfoWindow} from '@vis.gl/react-google-maps';


// const MyMapComponent = () => {
//   const [infoWindowOpen, setInfoWindowOpen] = useState(false);
//   const [selectedMarker, setSelectedMarker] = useState(null);

//   const handleMarkerClick = (marker) => {
//     setSelectedMarker(marker);
//     setInfoWindowOpen(true);
//   };

//   const handleInfoWindowClose = () => {
//     setInfoWindowOpen(false);
//     setSelectedMarker(null);
//   };

//   return (
//     <APIProvider apiKey={'AIzaSyD-QBFaA4K7IAT-N4hiOsUbmrt2CNSG9TA'}>
//       <LoadScript>
//         <Map zoom={12} center={{ lat: 53.54992, lng: 10.00678 }}  mapId={'e6f7185b209c673a'}>
//           <Marker
//             position={{ lat: 53.54992, lng: 10.00678 }}
//             onClick={() => handleMarkerClick('marker1')}
//           />
//           {infoWindowOpen && selectedMarker && (
//             <InfoWindow
//               position={selectedMarker.position}
//               onCloseClick={handleInfoWindowClose}
//             >
//               <div>
//                 <h2>Info Window Content</h2>
//                 <p>This is the content of the Info Window.</p>
//               </div>
//             </InfoWindow>
//           )}
//         </Map>
//       </LoadScript>
//     </APIProvider>
//   );
// };

// export default MyMapComponent;

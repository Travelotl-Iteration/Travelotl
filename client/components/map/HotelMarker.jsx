import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import HotelModal from '../HotelModal.jsx';

const HotelMarker = ({coords, hotelName}) => {
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [infoWindowShown, setInfoWindowShown] = useState(false);


  // clicking the marker will toggle the infowindow
  const handleMarkerClick = useCallback(() =>
    setInfoWindowShown(isShown => !isShown)
  );

  // if the maps api closes the infowindow, we have to synchronize our state
  const handleClose = useCallback(() => setInfoWindowShown(false));

  return (
    <AdvancedMarker
      position={coords}
      title={hotelName}
      onClick={handleMarkerClick}
      ref={markerRef}
      >
      <Pin
        background={'#ff4d4d'}
        borderColor={'#cc3333'}
        glyphColor={'#990000'}
       >
  {infoWindowShown && (
        <InfoWindow anchor={marker} onClose={handleClose}>
          <h2>InfoWindow content!</h2>
          <p>Some arbitrary html to be rendered into the InfoWindow.</p>
        </InfoWindow>
      )}

       </Pin>

    
    </AdvancedMarker>
  );
}

export default HotelMarker;
// import React, { useState } from 'react';
// import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
// import HotelModal from '../HotelModal.jsx';

// const HotelMarker = ({ coords, hotelName, hotelData }) => {
//   const [showModal, setShowModal] = useState(false);

//   function handleHotelMarkerClick() {
//     // setShowModal(true);
//     console.log('clicked')
//   }

//   return (
//     <>
//       <AdvancedMarker position={coords} title={hotelName}   onClick={handleHotelMarkerClick}>
//         <Pin
//           background={'#ff4d4d'}
//           borderColor={'#cc3333'}
//           glyphColor={'#990000'}
//         />
//       </AdvancedMarker>
//       {showModal && (
//         <HotelModal
//           showModal={showModal}
//           setShowModal={setShowModal}
//           hotelData={hotelData}
//         />
//       )}
//     </>
//   );
// };

// export default HotelMarker;

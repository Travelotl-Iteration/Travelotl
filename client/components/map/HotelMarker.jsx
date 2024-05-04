// import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
// import HotelModal from '../HotelModal.jsx';

// const HotelMarker = ({coords, hotelName}) => {
//   function handleHotelMarkerClick () {

//   }
//   return (
//     <AdvancedMarker
//       position={coords}
//       title={hotelName}>
//       <Pin
//         background={'#ff4d4d'}
//         borderColor={'#cc3333'}
//         glyphColor={'#990000'}
//         onClick={handleHotelMarkerClick}></Pin>
//     </AdvancedMarker>
//   );
// }

// export default HotelMarker;
import React, { useState } from 'react';
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import HotelModal from '../HotelModal.jsx';

const HotelMarker = ({ coords, hotelName, hotelData }) => {
  const [showModal, setShowModal] = useState(false);

  function handleHotelMarkerClick() {
    // setShowModal(true);
    console.log('clicked')
  }

  return (
    <>
      <AdvancedMarker position={coords} title={hotelName}   onClick={handleHotelMarkerClick}>
        <Pin
          background={'#ff4d4d'}
          borderColor={'#cc3333'}
          glyphColor={'#990000'}
        />
      </AdvancedMarker>
      {showModal && (
        <HotelModal
          showModal={showModal}
          setShowModal={setShowModal}
          hotelData={hotelData}
        />
      )}
    </>
  );
};

export default HotelMarker;

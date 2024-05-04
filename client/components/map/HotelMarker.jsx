import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const HotelMarker = ({coords, hotelName}) => {

  return (
    <AdvancedMarker
      position={coords}
      title={hotelName}>
      <Pin
        background={'#ff4d4d'}
        borderColor={'#cc3333'}
        glyphColor={'#990000'}></Pin>
    </AdvancedMarker>
  );
}

export default HotelMarker;
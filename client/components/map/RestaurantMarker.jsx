import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const RestaurantMarker = ({coords, restaurantName}) => {

  return (
    <AdvancedMarker
      position={coords}
      title={restaurantName}>
      <Pin
        background={'#22ccff'}
        borderColor={'#1e89a1'}
        glyphColor={'#0f677a'}></Pin>
    </AdvancedMarker>
  );
}

export default RestaurantMarker;
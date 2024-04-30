import React from "react";
import HotelModal from '../HotelModal.jsx';
import Hotel from './Hotel.jsx';

const Hotels = ({hotels}) => {
  const [showModal, setShowModal] = React.useState(false);
  const [hotelData, setHotelData] = React.useState([]);
  
  const handleClick = (e, name, zipcode) => {
    const body = {}
    // let addressArray = address.split(' ')
    // let zipcode = addressArray[addressArray.length-1]
    body.name = name
    body.zipcode = zipcode
    fetch('/getInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
      })
      .then(resp => resp.json())
      .then((data) => {
        setHotelData([data.name, data.ranking_data.ranking_string, data.price_level, data.rating])
        setShowModal(true)
      })
  }

  const hotelsArray = [];

  hotels.forEach(hotel => {
    hotelsArray.push(<Hotel handleClick={handleClick} name={hotel.name} address={hotel.address} zipcode={hotel.zipcode}/>)
  })  

  return (
    <div className='hotelsContainer' >
      {hotelsArray}
      {showModal && <HotelModal hotelData={hotelData} setShowModal={setShowModal}></HotelModal>}
    </div>
  );
};

export default Hotels;
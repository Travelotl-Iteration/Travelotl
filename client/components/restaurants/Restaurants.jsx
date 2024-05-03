import React from "react";
import RestaurantModal from '../RestaurantModal.jsx';
import Restaurant from './Restaurant.jsx';

const Restaurants = ({restaurants}) => {
  const [showModal, setShowModal] = React.useState(false);
  const [restaurantData, setRestaurantData] = React.useState([]);
  
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
        setRestaurantData([data.name, data.ranking_data.ranking_string, data.price_level, data.rating])
        setShowModal(true)
      })
  }

  const restaurantsArray = [];

  restaurants.forEach(restaurant => {
    restaurantsArray.push(<Restaurant handleClick={handleClick} name={restaurant.name} address={restaurant.address} zipcode={restaurant.zipcode}/>)
  })  

  return (
    <div className='hotelsContainer' >
      {restaurantsArray}
      {showModal && <RestaurantModal restaurantData={restaurantData} setShowModal={setShowModal}></RestaurantModal>}
    </div>
  );
};

export default Restaurants;
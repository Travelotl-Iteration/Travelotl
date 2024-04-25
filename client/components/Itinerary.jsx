import React from "react";
import HotelModal from './HotelModal.jsx';


const Itinerary = (props) => {

  // console.log("Itinerary Component:", itinerary.itinerary.itinerary);
  const [showModal, setShowModal] = React.useState(false);
  const [hotelData, setHotelData] = React.useState([]);
  const itinerary = props.itinerary
  const hotels = props.hotels


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
  const itineraryEntries = Object.entries(itinerary)
  // itineraryEntries.map(([dayNumber, activities]) => {
  //   console.log(dayNumber)
  //   console.log(activities)
  // })
  //console.log(itineraryEntries)
  // if(itinerary){
  //   Object.entries(itinerary.itinerary).map(([dayNumber, activities]) => {
  //     console.log(dayNumber)
  //     console.log(activities)
  //   })
  // }
  console.log(hotels)
 //console.log(itinerary.hotels)

  return (

   <>
    <div id='itinerary-details'>
      {itineraryEntries.map(([dayNumber, activities]) => (
        <div className="day-entry" key={dayNumber}>
          <h2 className='date'>{dayNumber}</h2>
          <div className="day-details">
            {activities.map((activityData) => (
              <div className='activity-detailss' key={activityData.timeOfDay}>
                <h3 className="time-of-day">{activityData.timeOfDay}</h3>
                 <p>Activity: {activityData.activity}</p>
                 <p>Description: {activityData.description}</p>
                 <p>Address: {activityData.address}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      { <div className="day-details">
        <h2 className='date'>Hotel Options</h2>
        {hotels.map((data) => ( 
          <>
            <p onClick={ e => handleClick(e, data.name, data.zipcode)}>{data.name}</p>
            <p>{data.address}</p>
          </>
      ))}
      </div> }
    </div>
    {showModal && <HotelModal hotelData={hotelData} setShowModal={setShowModal}></HotelModal>}
  </>
  );
};

export default Itinerary;

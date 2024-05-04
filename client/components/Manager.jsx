import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { itineraryRetrieved } from "../reducers/itineraryReducer";
import { Link, useNavigate } from 'react-router-dom';
import Header from "./Header";
import Cookies from 'js-cookie';


const Manager = () => {
  const [itineraries, setItineraries] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [jwt, setJwt] = useState(null);

  // Look for a jwt on cookies every time component renders and get itineraries if found
  useEffect(() => {
    const getItineraryList = async () => {
      const itineraryListResponse = await fetch('api/trip/retrieve', {
        method: 'GET',
          headers: {
            'Authorization': `Bearer ${jwt}`,
          },
      });
      const itineraryList = await itineraryListResponse.json();
      setItineraries(itineraryList);
    };

    const jwt = Cookies.get('jwt');
   
    if (!jwt) navigate('/login')
    else {
      setJwt(jwt);
      getItineraryList();
    }  
  }, [])

  const deleteItinerary = async (e) => {
    const tripId = e.target.parentNode.parentNode.id;
    try {
      let remainingTrips = await fetch('api/trip/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`,
        },
        body: JSON.stringify({ tripId: tripId }),
      });

      remainingTrips = await remainingTrips.json();

      setItineraries(remainingTrips);

    } catch (err) {
      console.error('Error with request:', error);
    }
    
  }

  const seeDetails = async (e) => {
    const tripId = e.target.parentNode.parentNode.id;
    try {
      let itineraryList = await fetch('api/trip/retrieve', {
        method: 'GET',
          headers: {
            'Authorization': `Bearer ${jwt}`,
          },
      });

      itineraryList = await itineraryList.json();

      let foundTrip;

      for (const trip of itineraryList) {
        if (trip._id === tripId) {
          foundTrip = JSON.parse(trip.trip);
          break;
        }
      }
  
      if (foundTrip) {
        console.log('Found trip in seeDetails in Manager: ', foundTrip)
        dispatch(itineraryRetrieved({foundTrip, tripId}));
        navigate('/itinerary');
      }
      
    } catch (error) {
      console.error('Error with request:', error);
    }
  };

  const itineraryList = [...itineraries];
  const renderList = itineraryList.map((itinerary) => {
    return (<div className='trip-tile' key={itinerary._id} id={itinerary._id}>
      <h3>{itinerary.destination}</h3>
      <p style={{margin: '2px'}}>From: <b>{itinerary.startDate}</b></p>
      <p style={{margin: '2px'}}>To: <b>{itinerary.endDate}</b></p>
      <p style={{margin: '2px'}}>Created on: <b>{new Date(itinerary.createdAt).toLocaleString()}</b></p>
      <div className="tile-buttons"><button onClick={ seeDetails }>See Details</button><button onClick={ deleteItinerary }>Delete</button></div>
    </div>)
  })
  // state: { itinerary: { itinerary: itinerary.trip }}
  // to={{ pathname: '/other', state: dataToPass }}
  

  return (<div>
    <Header />
    <h1 style={{margin: '10px', padding:'10px'}}>Itinerary Manager</h1>
    <div id='itinerary-grid'>{renderList}</div>
  </div>)
}

export default Manager;
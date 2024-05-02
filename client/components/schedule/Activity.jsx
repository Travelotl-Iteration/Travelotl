import React, { useState } from 'react';
import { ItemTypes } from './Constants.js';
import { useDrag, useDrop } from 'react-dnd';
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
import { itineraryActivityReplaced, itineraryRearranged } from '../../reducers/itineraryReducer.js';
import MiniLoader from '../MiniLoader.jsx';

const Activity = ({ activity, description, address, day, index, onDrop }) => {
  const [loading, setLoading] = useState(false);
  const itinerary = useSelector(state => state.itinerary.itinerary)
=======
import { useDispatch } from 'react-redux';
import { itineraryRearranged } from '../../reducers/itineraryReducer.js';
import ActivityModal from '../ActivityModal.jsx';


const Activity = ({ activity, description, address, day, index, onDrop, zipcode }) => {

>>>>>>> dev
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);
  const [activityData, setActivityData] = React.useState([]);

  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.ACTIVITY,
    item: { day, index },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  const [{isOver}, drop] = useDrop(() => ({
      accept: ItemTypes.ACTIVITY,
      drop: (item) => {
        dispatch(itineraryRearranged({droppedDay: item.day, droppedIndex: item.index, ontoDay: day, ontoIndex: index}))
      },
      collect: monitor => ({
        isOver: !!monitor.isOver(),
      }),
    })
  )

<<<<<<< HEAD
  const handleDeleteClick = async () => {
    // make a request to back end to query new activity
    try {
      setLoading(true);
      const response = await fetch('/api/trip/newActivity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({itinerary, activity, description, address})
      });
      const activityObj = await response.json();
      setLoading(false);
      dispatch(itineraryActivityReplaced({ activityObj, day, index }));
    } catch (error) { console.log('Error in fetch request to newActivity :', error) };
  };

  return (
    <>
      <div className='activity' ref={drag} style={{opacity: isDragging ? 0.5 : 1, cursor: 'move'}}>
        {loading ? (<div className='activityLoader'><MiniLoader /></div>) :
        (<div ref={drop} style={{ backgroundColor: isOver ? 'grey' : 'transparent', height: 'auto', marginTop: '10px', display: 'flex', flexDirection: 'column' }}>
          <button onClick={handleDeleteClick}>X</button>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3 style={{ margin: '0', marginRight: '5px' }}>Activity:</h3>
            <p style={{ margin: '0' }}>{activity}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3 style={{ margin: '0', marginRight: '5px' }}>Description:</h3>
            <p style={{ margin: '0' }}>{description}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3 style={{ margin: '0', marginRight: '5px' }}>Address:</h3>
            <p style={{ margin: '0' }}>{address}</p>
          </div>
        </div>)}
=======
  const handleClick = (e, activity, zipcode) => {
    const body = {}
    // let addressArray = address.split(' ')
    // let zipcode = addressArray[addressArray.length-1]
    body.name = activity
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
      setActivityData([data.name, data.ranking_data.ranking_string, data.price_level, data.rating])
      setShowModal(true)
    })
  }

    console.log('show modal', showModal)
  return (
    <div className='activity' ref={drag} style={{opacity: isDragging ? 0.5 : 1, cursor: 'move'}}>
      <div ref={drop} style={{ backgroundColor: isOver ? 'grey' : 'transparent', height: 'auto', marginTop: '10px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3 style={{ margin: '0', marginRight: '5px' }}>Activity:</h3>
          <p style={{ margin: '0' }}>{activity}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3 style={{ margin: '0', marginRight: '5px' }}>Description:</h3>
          <p style={{ margin: '0' }}>{description}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3 style={{ margin: '0', marginRight: '5px' }}>Address:</h3>
          <p style={{ margin: '0' }} onClick={e => handleClick(e, activity, zipcode)}>{address}</p>
        </div>
        {showModal && <ActivityModal activityData={activityData} setShowModal={setShowModal}></ActivityModal>}
>>>>>>> dev
      </div>
    </>
  )
  
};

export default Activity;
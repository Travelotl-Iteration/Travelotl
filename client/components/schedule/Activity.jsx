import React, { useState } from 'react';
import { ItemTypes } from './Constants.js';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { itineraryActivityReplaced, itineraryRearranged } from '../../reducers/itineraryReducer.js';
import ActivityModal from '../ActivityModal.jsx';
import NoDataModal from '../NoDataModal.jsx';


import MiniLoader from '../MiniLoader.jsx';

const Activity = ({ activity, description, address, day, index, onDrop, zipcode }) => {
  const [loading, setLoading] = useState(false);
  const itinerary = useSelector(state => state.itinerary.itinerary)
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);
  const [activityData, setActivityData] = React.useState([]);
  const [hasNoData, setHasNoData] = React.useState(false);


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
      console.log('activity object', activityObj)
      setLoading(false);
      dispatch(itineraryActivityReplaced({ activityObj, day, index }));
    } catch (error) { console.log('Error in fetch request to newActivity :', error) };
  };

  const handleClick = (e, activity, zipcode) => {
    const body = {}
    body.name = activity
    body.zipcode = zipcode
    fetch('/getInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
    .then(resp => {
      if (resp.status == 500) {
        setShowModal(true)
        setHasNoData(true)
        return
      }
      return resp.json()
    })
    .then((data) => {
      setActivityData([data.name, data.ranking_data.ranking_string, data.price_level, data.rating])
      setShowModal(true)
      setHasNoData(false)
    })
  }

  return (
    <>
      <div className='activity' ref={drag} style={{opacity: isDragging ? 0.5 : 1, cursor: 'move'}}>
        <svg className= "h-10 w-10 text-pink-500 cursor-pointer pt-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={e => handleClick(e, activity, zipcode)}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
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
        {showModal && hasNoData && <NoDataModal setShowModal={setShowModal}></NoDataModal>}
        {showModal && !hasNoData && <ActivityModal activityData={activityData} setShowModal={setShowModal}></ActivityModal>}
      </div>
    </>
  )
  
};

export default Activity;
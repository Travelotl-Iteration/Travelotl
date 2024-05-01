import React from 'react';
import { ItemTypes } from './Constants.js';
import { useDrag } from 'react-dnd';
import ActivityModal from '../ActivityModal.jsx';


const Activity = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  const [activityData, setActivityData] = React.useState([]);

  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.ACTIVITY,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

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
    console.log('props', props)
  return (
    <>
    <div className='activity' ref={drag} style={{opacity: isDragging ? 0.5 : 1, cursor: 'move'}}>
      <h3>Activity: {props.activity}</h3>
      <h3>Description: {props.description}</h3>
      {/* <h3>Place Name: {props.placeName}</h3> */}
      <h3 onClick={e => handleClick(e, props.activity, props.zipcode)}>Address: {props.address}</h3>
      {/* <h3>Zipcode: {props.zipcode}</h3> */}
    </ div>
    {showModal && <ActivityModal activityData={activityData} setShowModal={setShowModal}></ActivityModal>}
    </>
  ); 
};

export default Activity;
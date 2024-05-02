import React from 'react';
import { ItemTypes } from './Constants.js';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { itineraryRearranged } from '../../reducers/itineraryReducer.js';
import ActivityModal from '../ActivityModal.jsx';
import NoDataModal from '../NoDataModal.jsx';



const Activity = ({ activity, description, address, day, index, onDrop, zipcode }) => {

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
    .then(resp => {
      if (resp.status == 500) {
        setShowModal(true)
        setHasNoData(true)
        return
      }
      return resp.json()
    })
    .then((data) => {
      console.log('data is', data)
      setActivityData([data.name, data.ranking_data.ranking_string, data.price_level, data.rating])
      setShowModal(true)
      setHasNoData(false)
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
        {showModal && hasNoData && <NoDataModal setShowModal={setShowModal}></NoDataModal>}
        {showModal && !hasNoData && <ActivityModal activityData={activityData} setShowModal={setShowModal}></ActivityModal>}
      </div>
    </div>
  );
  
  
};

export default Activity;
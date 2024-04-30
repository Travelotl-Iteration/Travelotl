import React from 'react';
import { ItemTypes } from './Constants.js';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { itineraryRearranged } from '../../reducers/itineraryReducer.js';

const Activity = ({ activity, description, address, day, index, onDrop }) => {

  const dispatch = useDispatch();

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

  return (
    <div className='activity' ref={drag} style={{opacity: isDragging ? 0.5 : 1, cursor: 'move'}}>
      <div ref={drop} style={{ backgroundColor: isOver ? 'grey' : 'transparent', height: '100px', marginTop: '10px' }}>
        <h3>Activity: {activity}</h3>
        <h3>Description: {description}</h3>
        <h3>Address: {address}</h3>
      </div>
    </ div>
  ); 
};

export default Activity;
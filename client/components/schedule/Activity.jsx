import React from 'react';
import { ItemTypes } from './Constants.js';
import { useDrag } from 'react-dnd';

const Activity = (props) => {

  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.ACTIVITY,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div className='activity' ref={drag} style={{opacity: isDragging ? 0.5 : 1, cursor: 'move'}}>
      <h3>Activity: {props.activity}</h3>
      <h3>Description: {props.description}</h3>
      <h3>Address: {props.address}</h3>
    </ div>
  ); 
};

export default Activity;
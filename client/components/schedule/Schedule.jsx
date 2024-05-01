import React from 'react';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Day from './Day.jsx'

const Schedule = () => {
  const itinerary = useSelector(state => state.itinerary.itinerary);

  const days = [];

  for (const day in itinerary) {
    console.log('day is', day)
    days.push(<Day day={day} activities={itinerary[day]} />)
  }

  console.log('itenerary is ', itinerary)

  return (
    <div className='schedule'>
      {days}
    </ div>
  ); 
};

export default Schedule;
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Day from './Day.jsx';

const Schedule = () => {
  const itinerary = useSelector(state => state.itinerary.itinerary);
  const tripId = useSelector(state => state.itinerary.id);
  const hotels = useSelector(state => state.itinerary.hotels)

  useEffect(() => {
    const patchItinerary = async () => {
      try {
        let response = await fetch('/api/trip/build', {  
          method: 'PATCH',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({itinerary, hotels, tripId})
        })
        response = await response.json();
        console.log(response);
      } catch (error) { console.error('Error trying to patch itinerary: ', error) }
    }
    patchItinerary();
  }, [itinerary]);

  const days = [];

  for (const day in itinerary) {
    days.push(<Day day={day} activities={itinerary[day]} />)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='scheduleContainer'>
        {days}
      </ div>
    </DndProvider>
  ); 
};

export default Schedule;
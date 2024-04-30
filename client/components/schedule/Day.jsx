import React, { useState } from 'react';
import Activity from './Activity.jsx';


const Day = ({day, activities}) => {

  const [furled, setfurled] = useState(true);

  const handleClick = (e) => {
    if (furled) setfurled(false)
    else setfurled(true);
  }

  const activitiesArray = [];

  activities.forEach(activity => {
    activitiesArray.push(<Activity activity={activity.activity} description={activity.description} address={activity.address}/>)
  })

  return (
    <div className='day'>
      <h1 className='dayHeader' onClick={handleClick}>{day}</h1>
      {!furled && activitiesArray}
    </ div>
  ); 
};

export default Day;
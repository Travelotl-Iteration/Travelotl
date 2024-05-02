import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateBudget, updateHotelBudget } from '../../reducers/tripReducer';
import { updateItinerary } from '../../reducers/itineraryReducer';
import Loader from '../Loader';
import { useState } from 'react';

const Page4 = () => {

  const [loading, setLoading] = useState(false);

  const formData = useSelector(state => state.trip);

  const navigate = useNavigate();

  const { budget, hotelBudget } = useSelector(state => state.trip);
  
  const dispatch = useDispatch();

  const handleClick = async () => {
    setLoading(true);
    try {
      console.log('data sent to back end server to make API request');
      const response = await fetch('/api/trip/build', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        },
        body: JSON.stringify(formData)
      });
      const parsedData = await response.json();
      if (response.ok) {
        dispatch(updateItinerary(parsedData));
        navigate('/itinerary');
        setLoading(false);
      } else {
        throw new Error('failed to retrieve data');
      }
    } catch (error) {
      console.error('Error with request:', error);
    }
  }

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'budget') {
      dispatch(updateBudget(value));
    } else {
      dispatch(updateHotelBudget(value));
    }
  }

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      await handleClick();
    }
  };

  return (
    <div className="bg-gray-300 rounded border-4 border-black w-[50%]">
      <div>
        <label className='text-2xl' htmlFor="budget">
          Budget:
        </label>
        <input className='typed-input'
          type="number"
          name="budget"
          value={budget}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div>
        <label className='text-2xl' htmlFor="hotelBudget">
          Hotel Budget:
        </label>
        <input className='typed-input'
          type="number"
          name="hotelBudget"
          value={hotelBudget}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div>{
        loading ? <div id='loader'><Loader/></div> :
        <>
          <div>
            <Link to='/form/page2'>
              <button className='m-4 underline text-blue-600' type='button'>Back</button>
            </Link>
            <button className='m-4 underline text-blue-600' type='submit' onClick={handleClick}>Submit</button>
          </div>
        </>  
      }</div>
    </div>
  );
};

export default Page4;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState,
  reducers: {
    updateItinerary(state, action) {
      state.itinerary = action.payload.itinerary;
      state.hotels = action.payload.hotels
      state.restaurants = action.payload.restaurants
      console.log('in reducer state: ',state.hotels)
    },
    
    itineraryRetrieved(state, action) {
      state.itinerary = action.payload.foundTrip.itinerary;
      console.log('updateItinerary tripId', action.payload.tripId)
      state.id = action.payload.tripId;
      state.hotels = action.payload.foundTrip.hotels
      state.restaurants = action.payload.foundTrip.restaurants
      console.log('in reducer state: ',state.hotels)
    },

    itineraryRearranged(state, action) {
      const {droppedDay, droppedIndex, ontoDay, ontoIndex} = action.payload;
      const onto = state.itinerary[ontoDay][ontoIndex];
      const dropped = state.itinerary[droppedDay][droppedIndex];
      state.itinerary[ontoDay][ontoIndex] = dropped;
      state.itinerary[droppedDay][droppedIndex] = onto;
    }
  },
});

export const { actions, reducer } = itinerarySlice;
export const { updateItinerary, itineraryRearranged, itineraryRetrieved } = actions;
export default reducer;
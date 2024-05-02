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
    },
    
    itineraryRetrieved(state, action) {
      state.itinerary = action.payload.foundTrip.itinerary;
      state.id = action.payload.tripId;
      state.hotels = action.payload.foundTrip.hotels
      state.restaurants = action.payload.foundTrip.restaurants
    },

    itineraryRearranged(state, action) {
      const {droppedDay, droppedIndex, ontoDay, ontoIndex} = action.payload;
      const onto = state.itinerary[ontoDay][ontoIndex];
      const dropped = state.itinerary[droppedDay][droppedIndex];
      state.itinerary[ontoDay][ontoIndex] = dropped;
      state.itinerary[droppedDay][droppedIndex] = onto;
    },

    itineraryActivityReplaced(state, action) {
      const {activityObj, day, index } = action.payload;
      state.itinerary[day][index].placeName = activityObj.placeName;
      state.itinerary[day][index].description = activityObj.description;
      state.itinerary[day][index].address = activityObj.address;
    }
  },
});

export const { actions, reducer } = itinerarySlice;
export const { updateItinerary, itineraryRearranged, itineraryRetrieved, itineraryActivityReplaced } = actions;
export default reducer;
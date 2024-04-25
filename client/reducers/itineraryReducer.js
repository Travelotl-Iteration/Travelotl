import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState,
  reducers: {
    updateItinerary(state, action) {
      state.itinerary = action.payload.itinerary;
      state.hotels = action.payload.hotels
      console.log('in reducer state: ',state.hotels)
    },
  },
});

export const { actions, reducer } = itinerarySlice;
export const { updateItinerary } = actions;
export default reducer;
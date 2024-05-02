import { createSlice } from '@reduxjs/toolkit';

let startDate = new Date(Date.now());
let endDate = new Date(Date.now());
endDate.setDate(startDate.getDate() + 3);

const initialState = {
  destination: 'New York City',
  startDate: startDate.toISOString().slice(0, 10),
  endDate: endDate.toISOString().slice(0, 10),
  activities: [],
  budget: 1000,
  hotelBudget: 2000,
  travelers: 1,
  groupDescription: 'Solo traveler',
};

const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    updateDestination(state, action) {
      state.destination = action.payload;
    },
    updateStartDate(state, action) {
      state.startDate = action.payload;
    },
    updateEndDate(state, action) {
      state.endDate = action.payload;
    },
    updateBudget(state, action) {
      state.budget = action.payload;
    },
    updateHotelBudget(state, action) {
      state.hotelBudget = action.payload;
    },
  },
});

export const { actions, reducer } = tripSlice;
export const { updateDestination, updateStartDate, updateEndDate, updateBudget, updateHotelBudget } = actions;
export default reducer;
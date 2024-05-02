import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    deleteTrip (state, action) {
      state.push(action.payload)
    }
  },
});

export const { actions, reducer } = itinerarySlice;
export const { updateItinerary } = actions;
export default reducer;
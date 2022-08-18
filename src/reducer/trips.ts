import {createSlice} from '@reduxjs/toolkit';
import {iTrip} from '../types/trips';
import {tripsData} from '../mocks/trips';

const initialState = {
  trips: [],
} as {trips: null | iTrip[]};

export const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    resetTrips: () => initialState,
    fetchTrips: (state, action) => {
      state.trips = action.payload;
    },
  },
});

export const {fetchTrips, resetTrips} = tripsSlice.actions;

export const fetchTripsAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(fetchTrips(tripsData));
  }, 3000);
};

export const selectTrips = (state: {trips: iTrip[]}) => state.trips;

export default tripsSlice.reducer;

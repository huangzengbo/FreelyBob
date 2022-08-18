import {createSlice} from '@reduxjs/toolkit';
import {iTrip} from '../types/trips';
import {tripsData} from '../mocks/trips';

const initialState = {
  trips: [],
  loadingTrips: false,
} as {trips: null | iTrip[]; loadingTrips: boolean};

export const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    resetTrips: () => initialState,
    fetchTrips: (state, action) => {
      state.trips = action.payload;
    },
    setTripLoading: (state, action) => {
      state.loadingTrips = action.payload;
    },
  },
});

export const {fetchTrips, resetTrips, setTripLoading} = tripsSlice.actions;

export const fetchTripsAsync = () => dispatch => {
  dispatch(resetTrips());
  dispatch(setTripLoading(true));
  setTimeout(() => {
    dispatch(fetchTrips(tripsData));
    dispatch(setTripLoading(false));
  }, 3000);
};

export const selectTrips = (state: {trips: iTrip[]}) => state.trips.trips;
export const selectTripsLoading = (state: {loadingTrips: boolean}) =>
  state.trips.loadingTrips;

export default tripsSlice.reducer;

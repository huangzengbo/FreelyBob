import {StateType} from 'typesafe-actions';
import {combineReducers} from 'redux';
import trips from './trips';

export enum StoreEntry {
  TRIPS = 'trips',
}

const allReducers = {
  [StoreEntry.TRIPS]: trips,
};

const combinedReducer = combineReducers(allReducers);

const rootReducer = (
  state: Parameters<typeof combinedReducer>[0],
  action: Parameters<typeof combinedReducer>[1],
) => {
  return combinedReducer(state, action);
};

export type AppState = StateType<typeof rootReducer>;

export default rootReducer;

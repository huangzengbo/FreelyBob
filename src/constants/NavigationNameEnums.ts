import {StackNavigationProp} from '@react-navigation/stack';
import {iTrip} from '../types/trips';

export enum TabNames {
  HOME = 'Home',
  TRIPS = 'Trips',
}

export type TabNamesType = {
  [TabNames.HOME]: undefined;
  [TabNames.TRIPS]: undefined;
};

export enum TripStackNames {
  TRIPS_LIST = 'TripsList',
  TRIP_DETAIL = 'TripDetail',
}

export type TripsStackParamList = {
  default: undefined;
  TripsList: undefined;
  TripDetail: {tripItem: iTrip};
};

export type TripsStackNavigationProps<
  T extends keyof TripsStackParamList = 'default',
> = StackNavigationProp<TripsStackParamList, T>;

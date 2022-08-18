import React, {useEffect, useState} from 'react';
import {AppState} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {fetchTripsAsync, resetTrips, selectTrips} from '../../../reducer/trips';
import {
  TripsStackNavigationProps,
  TripStackNames,
} from '../../../constants/NavigationNameEnums';

import TripsComponent from './component';
import {iTrip} from '../../../types/trips';

interface ListingProps {
  navigation: TripsStackNavigationProps<TripStackNames.TRIPS_LIST>;
}
function TripsList(props: ListingProps): React.ReactElement {
  const trips = useSelector(selectTrips).trips;
  const [highlight, setHighlight] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTripsAsync());
    AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        setHighlight(true);
        setTimeout(() => {
          setHighlight(false);
        }, 3000);
      }
    });
  }, [dispatch]);

  const tripClick = (trip: iTrip) => {
    // TODO: Tracking here
    props.navigation.navigate(TripStackNames.TRIP_DETAIL, {
      tripItem: trip,
    });
  };

  const resetClick = () => {
    dispatch(resetTrips());
  };
  return (
    <TripsComponent
      isHighlighting={highlight}
      onClick={tripClick}
      resetClick={resetClick}
      trips={trips}
    />
  );
}

export default TripsList;

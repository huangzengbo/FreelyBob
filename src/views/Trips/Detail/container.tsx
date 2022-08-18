import React from 'react';
import {RouteProp} from '@react-navigation/native';

import TripDetailComponent from './component';
import {
  TripsStackParamList,
  TripStackNames,
} from '../../../constants/NavigationNameEnums';

interface DetailProps {
  route: RouteProp<TripsStackParamList, TripStackNames.TRIP_DETAIL>;
}

function TripDetail(props: DetailProps): React.ReactElement {
  return <TripDetailComponent trip={props.route.params.tripItem} />;
}

export default TripDetail;

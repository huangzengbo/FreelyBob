import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {TripStackNames, TabNames} from '../../constants/NavigationNameEnums';

import TripsList from './List';
import TripDetail from './Detail';

const Stack = createStackNavigator();

function TripsStack(): React.ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={TripStackNames.TRIPS_LIST}
        component={TripsList}
        options={() => ({
          title: TabNames.TRIPS,
        })}
      />
      <Stack.Screen
        name={TripStackNames.TRIP_DETAIL}
        component={TripDetail}
        options={({route}) => ({
          title: route?.params?.tripItem?.name,
        })}
      />
    </Stack.Navigator>
  );
}

export default TripsStack;

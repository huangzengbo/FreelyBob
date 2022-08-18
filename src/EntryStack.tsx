import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import theme from './styles/theme';

import {TabNames} from './constants/NavigationNameEnums';
import Icon from './sharedComponents/Icon';
import Home from './views/Home';
import Trips from './views/Trips';

const Tab = createBottomTabNavigator();

const EntryStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={TabNames.HOME}>
        <Tab.Screen
          name={TabNames.HOME}
          component={Home}
          options={{
            tabBarLabel: TabNames.HOME,
            tabBarInactiveTintColor: theme.palette.grey['500'],
            tabBarActiveTintColor: theme.palette.TEXT,
            tabBarIcon: ({focused}) => (
              <Icon name={TabNames.HOME} active={focused} />
            ),
          }}
        />
        <Tab.Screen
          name={TabNames.TRIPS}
          component={Trips}
          options={{
            tabBarLabel: TabNames.TRIPS,
            tabBarInactiveTintColor: theme.palette.grey['500'],
            tabBarActiveTintColor: theme.palette.TEXT,
            tabBarIcon: ({focused}) => (
              <Icon name={TabNames.TRIPS} active={focused} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default EntryStack;

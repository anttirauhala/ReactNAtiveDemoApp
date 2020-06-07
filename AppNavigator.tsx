import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from './screens/HomeTab';
import ScrollDemo from './screens/ScrollDemo';
import stackNavigator from './StackNavigator';
import StylingDemo from './screens/StylingDemo';

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName = '';

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'StackDemo') {
          iconName = 'align-justify';
        } else if (route.name === 'ScrollDemo') {
          iconName = 'angle-double-down';
        } else if (route.name === 'StylingDemo') {
          iconName = 'pencil-square-o';
        }
        return <FontAwesomeIcon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
    <Tab.Screen name="Home" component={HomeTab} />
    <Tab.Screen name="StackDemo" component={stackNavigator} />
    <Tab.Screen name="ScrollDemo" component={ScrollDemo} />
    <Tab.Screen name="StylingDemo" component={StylingDemo} />
  </Tab.Navigator>
);

export default AppTabNavigator;

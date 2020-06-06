import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Red from './screens/Red';
import Yellow from './screens/Yellow';
import Green from './screens/Green';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Red" component={Red} />
    <Stack.Screen name="Yellow" component={Yellow} />
    <Stack.Screen name="Green" component={Green} />
  </Stack.Navigator>
);

export default AppNavigator;

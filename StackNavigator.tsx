import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/StackDemo/Home';
import Red from './screens/StackDemo/Red';
import Yellow from './screens/StackDemo/Yellow';
import Green from './screens/StackDemo/Green';

const Stack = createStackNavigator();

const stackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Red" component={Red} />
    <Stack.Screen name="Yellow" component={Yellow} />
    <Stack.Screen name="Green" component={Green} />
  </Stack.Navigator>
);

export default stackNavigator;

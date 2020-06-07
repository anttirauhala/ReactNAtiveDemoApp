import React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from './screens/HomeTab';
import stackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName = '';

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'StackDemo') {
          iconName = 'CodeSandbox';
        }
        return <AntDesignIcon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
    <Tab.Screen name="Home" component={HomeTab} />
    <Tab.Screen name="StackDemo" component={stackNavigator} />
  </Tab.Navigator>
);

export default AppTabNavigator;

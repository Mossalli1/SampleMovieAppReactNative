/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

//icons
import OctIcon from 'react-native-vector-icons/Octicons';
import FontWesome from 'react-native-vector-icons/FontAwesome';

//Screens
import HomeScreen from './src/screens/Home';
import DetailScreen from './src/screens/DetailScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FF631B"
      barStyle={{backgroundColor: '#000'}}
      labeled={false}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <OctIcon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Play"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Play',
          tabBarIcon: ({color}) => (
            <FontWesome name="play-circle" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <FontWesome name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default Router;

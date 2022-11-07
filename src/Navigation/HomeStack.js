import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screen/Home';
import Card from '../components/Card';
import Notification from '../screen/Notification';
import AccountStack from './AccountStack';
import SmsStack from './SmsStack';

const TabNav = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <TabNav.Navigator initialRouteName="Home">
      <TabNav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <TabNav.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="notifications-circle-outline"
              color={color}
              size={25}
            />
          ),
        }}
      />
      <TabNav.Screen
        name="Post"
        component={Card}
        options={{
          tabBarLabel: 'Post',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="pluscircleo" color={color} size={size} />
          ),
        }}
      />
      <TabNav.Screen
        name="Sms"
        component={SmsStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Message',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="chatbubbles-outline" color={color} size={size} />
          ),
        }}
      />
      <TabNav.Screen
        name="Account"
        component={AccountStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </TabNav.Navigator>
  );
};

export default HomeStack;

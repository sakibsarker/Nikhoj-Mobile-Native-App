import React from 'react';
import CustomDrawer from '../components/CustomDrawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();

const UserStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default UserStack;

import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Chat from '../screen/Chat';
import Sms from '../screen/Sms';
const Stack=createNativeStackNavigator();

const SmsStack = () => {
  return (
   <Stack.Navigator initialRouteName='Message'>
    <Stack.Screen name='Chat' component={Chat}/>
    <Stack.Screen name='Message' component={Sms}/>
   </Stack.Navigator>
  )
}

export default SmsStack
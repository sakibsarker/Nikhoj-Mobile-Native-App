import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Setting from '../screen/Setting'
import Profile from '../screen/Profile'
import Editprofile from '../screen/Editprofile'
import Payment from '../screen/Payment'
import Support from '../screen/Support'
import Task from '../screen/Task'
import Wallet from '../screen/Wallet'

const Stack=createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator initialRouteName='Profile'>
      <Stack.Screen name='Setting' component={Setting}/>
      <Stack.Screen name='Profile' component={Profile}/>
      <Stack.Screen name='Editprofile' component={Editprofile}/>
      <Stack.Screen name='Payment' component={Payment}/>
      <Stack.Screen name='Support' component={Support}/>
      <Stack.Screen name='Wallet' component={Wallet}/>
      <Stack.Screen name='Task' component={Task}/>
    </Stack.Navigator>
  )
}

export default AccountStack
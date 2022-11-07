import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screen/Auth/Login';
import Register from '../screen/Auth/SignUp';
import UserStack from './UserStack';
const Stack = createNativeStackNavigator();

const AuthFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="AuthFlow"
        component={AuthFlow}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StudentStack"
        component={UserStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;

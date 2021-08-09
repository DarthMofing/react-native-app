import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BadgesTabNavigator from '../BadgesScreen/BadgesTabNavigator'
import BadgesLanding from '../BadgesLanding/BadgesLanding'
import Login from '../UsersScreen/Login'
import Signup from '../UsersScreen/Signup'
import Colors from '../../res/Colors'

const Stack = createStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors.charade,
          shadowColor: Colors.charade,
        },
        headerTintColor: Colors.white,
      }}
    >
      <Stack.Screen name='Landing' component={BadgesLanding} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='BadgesTabNavigator' component={BadgesTabNavigator} />
      <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  )
}

export default AppStack
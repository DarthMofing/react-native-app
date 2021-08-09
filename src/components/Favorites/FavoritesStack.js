import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorites from './Favorites'
import Colors from '../../res/Colors'
import BadgesDetails from '../BadgesDetails/BadgesDetails'

const Stack = createStackNavigator()

const FavoriteStack = () => {
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
        headerStyle:{
          backgroundColor: Colors.blackPearl,
          shadowColor: Colors.blackPearl,
        },
        headerTintColor: Colors.white,
      }}
    >
      <Stack.Screen name='Favorites' component={Favorites}/>
      <Stack.Screen name="BadgesDetailsFavorite" component={BadgesDetails} />
    </Stack.Navigator>
  )
}

export default FavoriteStack
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import DevList from '../pages/DevList'
import Favorite from '../pages/Favorite'

const { Navigator, Screen } = createBottomTabNavigator()

function DevTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontWeight: 'bold',
          fontSize: 13,
          marginLeft: 10,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d'
      }}
    >
      <Screen
        name="ProfList"
        component={DevList}
        options={{
          tabBarLabel: 'Devs',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons 
                name="ios-easel" 
                size={size} 
                color={ focused ? '#9871f5' : color} 
              />
            )
          }
        }}
      />
      <Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons 
                name="ios-heart" 
                size={size} 
                color={ focused ? '#9871f5' : color} 
              />
            )
          }
        }}
      />
    </Navigator>
  )
}

export default DevTabs;
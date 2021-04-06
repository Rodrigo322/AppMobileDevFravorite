import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing'
import GiveClasses from '../pages/GiveClasses'
import DevTabs from '../routes/DevTabs'
import Devs from '../pages/Devs'
import teste from '../components/DevItem/teste'

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown:  false}}>
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="DevTabs" component={DevTabs} />
        <Screen name="Devs" component={Devs} />
        <Screen name="Edicao" component={teste} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack
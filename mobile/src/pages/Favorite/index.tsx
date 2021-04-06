import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import AsyncStorege from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import PageHeader from '../../components/PageHeader'
import DevItem, { Desenvolvedor } from '../../components/DevItem'


import styles from './styles'

function Favorite() {
  const [favorite, setFavorite] = useState([])


  useFocusEffect(() => {
    AsyncStorege.getItem('favorites').then(response => {
      if(response) {
        const favoritedDevs = JSON.parse(response)
        setFavorite(favoritedDevs)
      }
    })
  })


  return (
    <View style={styles.container}>
      <PageHeader title="Meus Devs favoritos" />

      <ScrollView
        style={styles.profList}
        contentContainerStyle={{
          paddingHorizontal: 2,
          paddingBottom: 14
        }}
      >
        
        {favorite.map((dev: Desenvolvedor) => {
          return (
            <DevItem 
              key={dev.id} 
              desenvolvedor={dev}
              favorited
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Favorite


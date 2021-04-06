import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import AsyncStorege from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'


import api from '../../services/api'

import PageHeader from '../../components/PageHeader'
import DevItem, { Desenvolvedor } from '../../components/DevItem'

import styles from './styles'

function DevList() {

  const [devs, setDevs] = useState([])
  const [favorite, setFavorite] = useState<number[]>([])
  const { navigate } = useNavigation()

  useEffect(() => {
    AsyncStorege.getItem('favorites').then(response => {
      if(response) {
        const favoritedDevs = JSON.parse(response)
        const favoritedDevsIds = favoritedDevs.map((dev: Desenvolvedor) => {
          return dev.id
        })

        setFavorite(favoritedDevsIds)
      }
    })
  }, [])


  function handleNavigateToNewDevPage() {
    navigate('Devs')
  }

  function loandingDevs() {
    api.get('/list-user').then(response => {
      setDevs(response.data)
    });
  }

  useFocusEffect(() => {
    loandingDevs()
  });

  return (
    <View style={styles.container}>
      <PageHeader
        title="Veja Devs incriveis"
        headerRight={(
          <RectButton
            onPress={handleNavigateToNewDevPage}
            style={styles.newDevButton}
          >
            <Text style={styles.newDevText}>
              Add novo Dev
            </Text>
          </RectButton>
        )}
      />

      <ScrollView
        style={styles.devList}
        contentContainerStyle={{
          paddingHorizontal: 2,
          paddingBottom: 14
        }}
      >
        {devs.map((dev: Desenvolvedor) => {

          return ( 
            <DevItem 
              key={dev.id} 
              desenvolvedor={dev}
              favorited={favorite.includes(dev.id)} 
            />
          )}
        )}
      </ScrollView>
    </View>
  )
}

export default DevList
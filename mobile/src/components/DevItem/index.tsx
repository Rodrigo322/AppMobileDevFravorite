import React, { useRef, useState } from 'react'
import { Image, Text, View, Linking, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import AsyncStorege from '@react-native-async-storage/async-storage'

import { useNavigation } from '@react-navigation/native'


import favoritIcon from '../../assets/images/icons/heart-outline.png'
import unfavoritIcon from '../../assets/images/icons/unfavorite.png'
import whatsaapIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'
import api from '../../services/api'

export interface Desenvolvedor {
  id: number
  avatar: string
  name: string
  profession: string
  bio: string
}

interface DevItemProps {
  desenvolvedor: Desenvolvedor
  favorited: boolean
}

const DevItem: React.FC<DevItemProps> = ({ desenvolvedor, favorited }) => {
  const [isFavorite, setIsFavorite] = useState(favorited)

  //const [idDelete, setIdDelete] = useState([])
  const {navigate} = useNavigation()

  function handleLinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?text=_Olha que Dev incrivel!_
    
    *Name:*  *${desenvolvedor.name}

    *Profição:* *${desenvolvedor.profession}

    *Avatar:* *${desenvolvedor.avatar}

    Biografia: *${desenvolvedor.bio}*`)
  }

  //funcionando funcionando mais com defeito
  // async function deletar(id: any) {
  //     await api.delete(`delete-user/${id}`)

  //     setIdDelete(idDelete.filter(idDelete => desenvolvedor.id !== id))

  //     Alert.alert('Excluido!!')
  // }


  async function handleFavoriteDev() {
    const favorites = await AsyncStorege.getItem('favorites')

    let favoritesArray = []

    if (favorites) {
      favoritesArray = JSON.parse(favorites)
    }

    if (isFavorite) {
      const favoriteIndex = favoritesArray.findIndex((devItem: Desenvolvedor) => {
        return devItem.id === desenvolvedor.id
      })
      favoritesArray.splice(favoriteIndex, 1)
      setIsFavorite(false)

    } else {
      favoritesArray.push(desenvolvedor)
      setIsFavorite(true)
    }
    await AsyncStorege.setItem('favorites', JSON.stringify(favoritesArray))
  }


  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{ uri: desenvolvedor.avatar }}
          style={styles.avatar}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{desenvolvedor.name}</Text>
          <Text style={styles.subject}>{desenvolvedor.profession}</Text>
        </View>

      </View>

      <Text style={styles.bio}>
        {desenvolvedor.bio}
      </Text>

      <View style={styles.footer}>
        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleFavoriteDev}
            style={[
              styles.favoriteButton,
              isFavorite ? styles.favorited : {}
            ]}
          >
            {isFavorite
              ? <Image source={unfavoritIcon} />
              : <Image source={favoritIcon} />
            }
          </RectButton>

          

          <RectButton
            style={styles.shereButton}
            
            //onPress={handleLinkToWhatsapp}
            onPress={()=> navigate('Edicao', {nome: desenvolvedor.name})}
          >
            <Image source={whatsaapIcon} />
            <Text style={styles.contactButtonText}>Compartilhar no whats</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}


export default DevItem
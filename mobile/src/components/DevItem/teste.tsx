import React from 'react'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'


interface props {
  nome: string
  
}

const Edicao: React.FC<props> = (nome) => {

  const {navigate} = useNavigation()


  return(
    <Text>{navigate.name}</Text>
  )
}

export default Edicao
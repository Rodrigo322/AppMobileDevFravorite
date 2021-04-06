import React, { useState } from 'react'
import { 
  View, Text, TextInput, ScrollView, KeyboardAvoidingView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { RectButton } from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'

import api from '../../services/api'

import styles from './styles'

function Devs() {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [profession, setProfession] = useState('')
  const [bio, setBio] = useState('')

  const { navigate } = useNavigation()

  const data = {
    name,
    avatar,
    profession,
    bio
  }

  async function handleSaveDevSubmit() {
    await api.post('create-user', data)
    Alert.alert('Cadastro realizado com sucesso')
   
    navigate('DevTabs')
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Cadastre um novo Dev"
        headerRight={(
          <RectButton
            onPress={handleSaveDevSubmit}
            style={styles.newDevButton}
          >
            <Text style={styles.newDevText}>
              Cadastrar
            </Text>
          </RectButton>
        )}
      >

        <ScrollView
          style={{
            marginTop: 30,
            marginBottom: 30
          }}
        >
          <KeyboardAvoidingView 
            contentContainerStyle={styles.devForm} 
            behavior="position" 
            enabled
          >
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={text => setName(text)}
              placeholder="Digite seu nome"
            />

            <Text style={styles.label}>Avatar</Text>
            <TextInput
              style={styles.input}
              value={avatar}
              onChangeText={text => setAvatar(text)}
              placeholder="Insira o link do seu avatar"
            />

            <Text style={styles.label}>Profissão</Text>
            <TextInput
              style={styles.input}
              value={profession}
              onChangeText={text => setProfession(text)}
              placeholder="Digite o nome da sua profissão"
            />
            <Text style={styles.label}>Biografia</Text>
            <TextInput
              style={styles.input}
              value={bio}
              onChangeText={text => setBio(text)}
              placeholder="Descreva com poucas palavras sua biografia"
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </PageHeader>
    </View>
  )
}

export default Devs
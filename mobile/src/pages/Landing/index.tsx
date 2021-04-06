import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FlatList, RectButton } from 'react-native-gesture-handler'


import styles from './styles'

// import LandingIMG from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'


function Landing() {

  const { navigate } = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses')
  }
  function handleNavigateToDevsPage() {
    navigate('DevTabs')
  }
  
  return (
    <View style={styles.container}>

      <ImageBackground
        // resizeMode="contain"
        source={giveClassesBgImage}
        style={styles.content}
      >


        {/* <Image source={LandingIMG} style={styles.banner} /> */}
        <Text style={styles.titleApp}>Dev. Favorite</Text>

        <Text style={styles.title}>
          Seja bem-vindo! {'\n'}
          <Text style={styles.titleBold}>Oque você deseja fazer?</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleNavigateToDevsPage} 
            style={[
              styles.button, 
              styles.buttonPrimary
            ]}
          >
            <Image source={studyIcon} />

            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>

          <RectButton
            onPress={handleNavigateToGiveClassesPage}
            style={[
              styles.button,
              styles.buttonSecondary
            ]}
          >
            <Image source={giveClassesIcon} />

            <Text style={styles.buttonText}>Info app</Text>
          </RectButton>

        </View>
      </ImageBackground>
    </View>
  );
}

export default Landing;
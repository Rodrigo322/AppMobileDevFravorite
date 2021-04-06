import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#333',
    padding: 40,
  },

  titleApp: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 55, 
    lineHeight: 70,
    maxWidth: 300,
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  banner: {
    width: '100%',
    resizeMode: 'contain'
  },
  
  title: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80
  },
  titleBold: {
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between'
  },
  button: {
    height: 150,
    width: '45%',
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'space-between',
    borderRadius: 10,

  },
  buttonPrimary: {
    backgroundColor: '#9871f5',

  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  },
  buttonSecondary: {
    backgroundColor: '#04d361',

  },
 
});

export default styles;
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  devList: {
    marginTop: -40,
    padding: 16,
  },

  newDevButton: {
    backgroundColor: '#04d361',
    flex: 1,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  newDevText: {
    color: '#fff',
    fontWeight: 'bold',
  }

})

export default styles
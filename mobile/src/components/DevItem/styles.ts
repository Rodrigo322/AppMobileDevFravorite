import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden'
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#111',
  },
  profileInfo: {
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
  subject: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4
  },
  bio: {
    marginHorizontal: 24,
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 24,
    color: '#fff'
  },
  footer: {
    backgroundColor: '#111',
    padding: 24,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  favoriteButton: {
    backgroundColor: '#8257e5',
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },
  favorited: {
    backgroundColor: '#e33d3d'
  },
  shereButton: {
    backgroundColor: '#04d361',
    flex: 1,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },
  contactButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
    fontSize: 14
  }
});

export default styles;
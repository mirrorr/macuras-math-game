import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F6F3', // Light mint background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  
  titleContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 15,
    letterSpacing: 1,
  },
  
  subtitle: {
    fontSize: 18,
    color: '#7F8C8D',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
  },
  
  playButton: {
    backgroundColor: '#4ECDC4',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 6,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    marginBottom: 40,
    borderWidth: 3,
    borderColor: '#45B7A8',
  },
  
  playButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 1,
  },
  
  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 25,
    borderRadius: 20,
    width: '90%',
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: '#FFB6C1',
  },
  
  infoText: {
    fontSize: 16,
    color: '#2C3E50',
    marginBottom: 8,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default styles;
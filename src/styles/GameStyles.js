import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1', // Light pink background
    padding: 20,
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  
  backButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  problemContainer: {
    backgroundColor: '#FFFFFF',
    padding: 30,
    marginVertical: 20,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 5,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    borderWidth: 3,
    borderColor: '#4ECDC4',
  },
  
  problemText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    letterSpacing: 2,
  },
  
  answerContainer: {
    backgroundColor: '#F8F9FA',
    padding: 20,
    marginVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#95E1D3',
  },
  
  answerLabel: {
    fontSize: 18,
    color: '#7F8C8D',
    marginBottom: 10,
    fontWeight: '600',
  },
  
  answerText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2C3E50',
    minHeight: 50,
    minWidth: 100,
    textAlign: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#3498DB',
    paddingBottom: 5,
  },
  
  loadingText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#7F8C8D',
    marginTop: 50,
  },
});

export default styles;
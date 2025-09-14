import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  // Score Display Styles
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 15,
    borderRadius: 20,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: '#F39C12',
  },
  
  scoreItem: {
    alignItems: 'center',
    minWidth: 60,
  },
  
  scoreLabel: {
    fontSize: 12,
    color: '#7F8C8D',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  
  scoreValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginTop: 2,
  },
  
  // Keypad Styles
  keypadContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    marginTop: 20,
    borderWidth: 3,
    borderColor: '#9B59B6',
  },
  
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  
  numberButton: {
    backgroundColor: '#3498DB',
    width: (width - 120) / 3,
    height: 70,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: '#2980B9',
  },
  
  numberButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  
  clearButton: {
    backgroundColor: '#E74C3C',
    borderColor: '#C0392B',
  },
  
  clearButtonText: {
    fontSize: 16,
    color: 'white',
  },
  
  submitButton: {
    backgroundColor: '#27AE60',
    borderColor: '#229954',
  },
  
  submitButtonDisabled: {
    backgroundColor: '#BDC3C7',
    borderColor: '#95A5A6',
  },
  
  submitButtonText: {
    fontSize: 16,
    color: 'white',
  },
  
  submitButtonTextDisabled: {
    color: '#7F8C8D',
  },
});

export default styles;
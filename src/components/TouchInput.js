import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/ComponentStyles';

const TouchInput = ({ onNumberPress, onClear, onSubmit, disabled }) => {
  const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['Clear', 0, 'Submit']
  ];

  const renderButton = (item, rowIndex, colIndex) => {
    let buttonStyle = styles.numberButton;
    let textStyle = styles.numberButtonText;
    let onPress;

    if (item === 'Clear') {
      buttonStyle = [styles.numberButton, styles.clearButton];
      textStyle = [styles.numberButtonText, styles.clearButtonText];
      onPress = onClear;
    } else if (item === 'Submit') {
      buttonStyle = [
        styles.numberButton, 
        styles.submitButton,
        disabled && styles.submitButtonDisabled
      ];
      textStyle = [
        styles.numberButtonText, 
        styles.submitButtonText,
        disabled && styles.submitButtonTextDisabled
      ];
      onPress = disabled ? null : onSubmit;
    } else {
      onPress = () => onNumberPress(item);
    }

    return (
      <TouchableOpacity
        key={`${rowIndex}-${colIndex}`}
        style={buttonStyle}
        onPress={onPress}
        disabled={item === 'Submit' && disabled}
        activeOpacity={0.7}
      >
        <Text style={textStyle}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.keypadContainer}>
      {numbers.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.keypadRow}>
          {row.map((number, colIndex) => renderButton(number, rowIndex, colIndex))}
        </View>
      ))}
    </View>
  );
};

export default TouchInput;
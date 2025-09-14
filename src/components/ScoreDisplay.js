import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/ComponentStyles';

const ScoreDisplay = ({ score, level, streak }) => {
  return (
    <View style={styles.scoreContainer}>
      <View style={styles.scoreItem}>
        <Text style={styles.scoreLabel}>Score</Text>
        <Text style={styles.scoreValue}>{score}</Text>
      </View>
      
      <View style={styles.scoreItem}>
        <Text style={styles.scoreLabel}>Level</Text>
        <Text style={styles.scoreValue}>{level}</Text>
      </View>
      
      <View style={styles.scoreItem}>
        <Text style={styles.scoreLabel}>Streak</Text>
        <Text style={styles.scoreValue}>{streak} 🔥</Text>
      </View>
    </View>
  );
};

export default ScoreDisplay;
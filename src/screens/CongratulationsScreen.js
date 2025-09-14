import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import styles from '../styles/CongratulationsStyles';

const CongratulationsScreen = ({ navigation, route }) => {
  const { finalScore, finalLevel, totalProblems } = route.params || {
    finalScore: 0,
    finalLevel: 10,
    totalProblems: 50
  };

  const handlePlayAgain = () => {
    navigation.navigate('Game');
  };

  const handleBackToMenu = () => {
    navigation.navigate('Menu');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.celebrationContainer}>
          <Text style={styles.celebrationEmoji}>🎉</Text>
          <Text style={styles.congratulationsTitle}>
            CONGRATULATIONS!
          </Text>
          <Text style={styles.celebrationEmoji}>🏆</Text>
        </View>

        <View style={styles.achievementContainer}>
          <Text style={styles.achievementText}>
            You've mastered all levels of
          </Text>
          <Text style={styles.gameTitle}>
            Macuras Math Game!
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{finalScore}</Text>
            <Text style={styles.statLabel}>Final Score</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{finalLevel}</Text>
            <Text style={styles.statLabel}>Levels Completed</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{totalProblems}+</Text>
            <Text style={styles.statLabel}>Problems Solved</Text>
          </View>
        </View>

        <View style={styles.messageContainer}>
          <Text style={styles.message}>
            🌟 You're a Math Champion! 🌟
          </Text>
          <Text style={styles.subMessage}>
            From simple addition to complex multiplication, you've conquered it all!
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.playAgainButton} onPress={handlePlayAgain}>
            <Text style={styles.playAgainButtonText}>🎮 Play Again</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuButton} onPress={handleBackToMenu}>
            <Text style={styles.menuButtonText}>🏠 Back to Menu</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            Keep practicing to stay sharp! 💪
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CongratulationsScreen;
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { generateProblem } from '../utils/MathUtils';
import { showAlert } from '../utils/AlertUtils';
import ScoreDisplay from '../components/ScoreDisplay';
import TouchInput from '../components/TouchInput';
import styles from '../styles/GameStyles';

const GameScreen = ({ navigation }) => {
  const [currentProblem, setCurrentProblem] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [streak, setStreak] = useState(0);
  const [totalProblems, setTotalProblems] = useState(0);

  // Reset game state when component mounts (for "Play Again" functionality)
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Reset all game state when navigating to this screen
      setScore(0);
      setLevel(1);
      setStreak(0);
      setTotalProblems(0);
      setUserAnswer('');
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    generateNewProblem();
  }, [level]);

  const generateNewProblem = () => {
    const problem = generateProblem(level);
    setCurrentProblem(problem);
    setUserAnswer('');
  };

  const handleNumberPress = (number) => {
    if (userAnswer.length < 4) { // Limit answer length
      setUserAnswer(userAnswer + number.toString());
    }
  };

  const handleClear = () => {
    setUserAnswer('');
  };

  const handleSubmit = () => {
    if (userAnswer === '') return;
    
    const answer = parseInt(userAnswer);
    if (answer === currentProblem.answer) {
      // Correct answer
      const points = level * 10;
      const newScore = score + points;
      const newStreak = streak + 1;
      const newTotalProblems = totalProblems + 1;
      
      setScore(newScore);
      setStreak(newStreak);
      setTotalProblems(newTotalProblems);
      
      showAlert(
        '🎉 Correct!',
        `Great job! You earned ${points} points!`,
        [{ text: 'Next Problem', onPress: generateNewProblem }]
      );
      
      // Level up every 5 correct answers in a row
      if (newStreak % 5 === 0 && level < 10) {
        const newLevel = level + 1;
        setLevel(newLevel);
        showAlert(
          '🌟 Level Up!',
          `Welcome to level ${newLevel}!`,
          [{ text: 'Continue', onPress: () => {} }]
        );
      }
      
      // Check if player completed level 10 (final level)
      if (level === 10 && newStreak % 5 === 0) {
        // Player has completed all levels!
        setTimeout(() => {
          navigation.navigate('Congratulations', {
            finalScore: newScore,
            finalLevel: 10,
            totalProblems: newTotalProblems
          });
        }, 2000); // Delay to show the level up alert first
      }
    } else {
      // Wrong answer
      setStreak(0);
      setTotalProblems(totalProblems + 1);
      showAlert(
        '❌ Not quite right',
        `The correct answer is ${currentProblem.answer}. Try the next one!`,
        [{ text: 'Next Problem', onPress: generateNewProblem }]
      );
    }
  };

  const handleBackToMenu = () => {
    navigation.navigate('Menu');
  };

  if (!currentProblem) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackToMenu}>
          <Text style={styles.backButtonText}>← Menu</Text>
        </TouchableOpacity>
        <ScoreDisplay score={score} level={level} streak={streak} />
      </View>

      <View style={styles.problemContainer}>
        <Text style={styles.problemText}>
          {currentProblem.num1} {currentProblem.operator} {currentProblem.num2} = ?
        </Text>
      </View>

      <View style={styles.answerContainer}>
        <Text style={styles.answerLabel}>Your Answer:</Text>
        <Text style={styles.answerText}>{userAnswer || '_'}</Text>
      </View>

      <TouchInput
        onNumberPress={handleNumberPress}
        onClear={handleClear}
        onSubmit={handleSubmit}
        disabled={userAnswer === ''}
      />
    </SafeAreaView>
  );
};

export default GameScreen;
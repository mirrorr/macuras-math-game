import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from '../styles/MenuStyles';

const MenuScreen = ({ navigation }) => {
  const handleStartGame = () => {
    navigation.navigate('Game');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>🧮 Kids Math Game</Text>
        <Text style={styles.subtitle}>Learn math by playing!</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.playButton} onPress={handleStartGame}>
          <Text style={styles.playButtonText}>🎮 Start Playing</Text>
        </TouchableOpacity>
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            Solve math problems to earn points and level up!
          </Text>
          <Text style={styles.infoText}>
            • Level 1: Numbers 1-5
          </Text>
          <Text style={styles.infoText}>
            • Level 2: Numbers 1-10
          </Text>
          <Text style={styles.infoText}>
            • Higher levels: Bigger numbers!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
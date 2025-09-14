import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from './src/screens/GameScreen';
import MenuScreen from './src/screens/MenuScreen';
import CongratulationsScreen from './src/screens/CongratulationsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#FFE4E1" />
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Menu"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="Congratulations" component={CongratulationsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
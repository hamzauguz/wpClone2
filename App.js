import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/OnBoardingScreens/Home';
import OnBoarding from './screens/OnBoardingScreens/OnBoarding';
import OTP from './screens/OnBoardingScreens/OTP';
import WriteNumberScreen from './screens/OnBoardingScreens/WriteNumberScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ title: "Home", headerShown: false }} />
        <Stack.Screen name="WriteNumberScreen" component={WriteNumberScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OTP" component={OTP} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

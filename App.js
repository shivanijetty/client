import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingScreen from './screens/LandingScreen/LandingScreen'

export default function App() {

  const Stack = createNativeStackNavigator()


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingScreen" options={{ headerShown: false }} >
          {() => <LandingScreen />}
        </Stack.Screen>
        <Stack.Screen name="CountdownScreen" options={{ headerShown: false }} >
          {() => <CountdownScreen />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>    
  );
}



import React from 'react'
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import TopBarNavigator from './src/TopBarNavigator'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#303eac" />
      <TopBarNavigator />
    </SafeAreaProvider>
  );
}
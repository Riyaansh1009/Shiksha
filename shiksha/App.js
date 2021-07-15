import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import English from './screens/English';
import LanguageScreen from './screens/WelcomeScreen';
import {createSwitchNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation'
import Hindi from './screens/Hindi'

export default function App() {
  return (
    <View>
     <AppContainer/>
    </View>
  );


}
 const navigation = createSwitchNavigator({
   Welcome:WelcomeScreen,
   Language:LanguageScreen,
   English: English,
   Hindi:Hindi

 })
const AppContainer = createAppContainer(navigation)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

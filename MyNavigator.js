/*
NAME
  MyNavigator

PURPOSE
  Main navigation for the app, implemented as a StackNavigator.

NOTES
  Playing around with app layout. Will make each screen its own .js file later.
  Also, note to self: why are tabs smaller on this file compared to the others...
  what's up with that VS Code? Haha.
*/

import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { DofScreen } from './screens/DofScreen';
import { LightMeterScreen } from './screens/LightMeterScreen'
import { CircleButton } from './components/CircleButton';

/*Screens for Navigation. Should be in their own .js files-------------------------*/
const HomeScreen = ({navigation}) => (
  <View style={styles.home}>
    <View style={styles.leftColumn}>
      <Text style={styles.title}>ANALOG</Text>
    </View>

    <View style={styles.rightColumn}>
      <CircleButton 
        style={styles.menuButton} 
        label="DOF" 
        onPress={() => navigation.navigate('DofCalc')}/>
      <CircleButton 
        style={styles.menuButton} 
        label="LIGHT" 
        onPress={() => navigation.navigate('LightMeter')}/>
      <CircleButton 
        style={styles.menuButton} 
        label="LOGBOOK" 
        onPress={() => navigation.navigate('Logbook')}/>
      <CircleButton 
        style={styles.menuButton} 
        label="OPTIONS"/>
      <CircleButton 
        style={styles.menuButton} 
        label="ABOUT"/>
    </View>
  </View>
);

const Log = ({navigation}) => (
  <View style={styles.standardView}>
    <StatusBar barStyle='dark-content'/>
    <Text style={styles.title}>LOGBOOK</Text>
  </View>
);

const MyNavigator = StackNavigator({
  //The first one is the default screen.
  Home: {
    screen: HomeScreen
  },

  DofCalc: {
    screen: DofScreen
  },

  LightMeter: {
    screen: LightMeterScreen
  },

  Logbook: {
    screen: Log
  }
},
{
  headerMode: "none"
});

/*Make Navigator for public use----------------------------------------------------*/
export default MyNavigator;

/*Styles---------------------------------------------------------------------------*/
const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff'
  },

  leftColumn: {
    flex: 2,
    backgroundColor: '#09aa9a',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  rightColumn: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: '#ffffff',
    fontSize: 22
  },

  menuButton: {
    marginTop: '2.5%',
    marginBottom: '2.5%'
  }
});
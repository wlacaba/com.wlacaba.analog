import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import MainNavigator from './screens/MainNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MainNavigator/>
      </View>
    );
  }
}

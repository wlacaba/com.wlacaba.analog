import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import MyNavigator from './MyNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MyNavigator/>
      </View>
    );
  }
}

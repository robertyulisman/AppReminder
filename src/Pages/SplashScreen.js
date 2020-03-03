import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text> Loading ... </Text>
          <Text style={{fontSize: 18, marginTop: 120}}> Reminder App </Text>
          <Text style={{fontSize: 14}}> Version 1</Text>
        </View>
      </View>
    );
  }
}

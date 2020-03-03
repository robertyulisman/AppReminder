import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../components/Header';

export default class JenisPuasa extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          onPressBars={() => this.props.navigation.openDrawer()}
          titleApp="Jenis-jenis Puasa"
        />
        <Text> Jenis Puasa </Text>
      </View>
    );
  }
}

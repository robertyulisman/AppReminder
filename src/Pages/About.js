import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import Header from '../components/Header';

export default class About extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          onPressBars={() => this.props.navigation.openDrawer()}
          titleApp="Tentang Aplikasi"
        />
        <ScrollView>
          <View
            style={{
              marginTop: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{height: 50, width: 50}}>
              <Image
                style={{
                  height: undefined,
                  width: undefined,
                  resizeMode: 'contain',
                  flex: 1,
                }}
                source={require('../assets/icons/bellActive.png')}
              />
            </View>

            <Text
              style={{
                marginTop: 10,
                fontSize: 18,
                fontWeight: '700',
                color: 'grey',
              }}>
              Reminder App
            </Text>
            <Text style={{fontSize: 14}}> Version 1.0 </Text>
            <Text style={{marginTop: 100, fontSize: 14}}> dibuat oleh : </Text>
            <Text style={{marginTop: 20, fontSize: 18}}> Arief Ansar </Text>
            <Text
              style={{
                fontSize: 14,
                backgroundColor: '#EBFBFF',
                marginBottom: 20,
              }}>
              ariefansar@gmail.com
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';

class Header extends Component {
  render() {
    return (
      <View
        style={{
          height: 60,
          backgroundColor: 'grey',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={this.props.onPressBars}
          style={{height: 40, width: 40, padding: 9}}>
          <Image
            style={{
              height: undefined,
              width: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
            source={require('../assets/icons/bars.png')}
          />
        </TouchableOpacity>
        <Text style={{flex: 1, marginLeft: 20, fontSize: 18, color: 'white'}}>
          {this.props.titleApp}
        </Text>
        <TouchableOpacity
          onPress={this.props.onPressCalender}
          style={{
            height: 40,
            width: 40,

            marginRight: 10,
            padding: 5,
          }}>
          <Image
            style={{
              height: undefined,
              width: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
            source={this.props.imageCalender}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('oke')}
          style={{height: 40, width: 40, padding: 9}}>
          <Image
            style={{
              height: undefined,
              width: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
            source={require('../assets/icons/ellips.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;

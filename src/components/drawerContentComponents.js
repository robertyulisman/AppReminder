import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class drawerContentComponents extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <ImageBackground
            source={require('../assets/images/drawerImage.png')}
            style={{
              flex: 1,
              width: 280,
              justifyContent: 'flex-end',
              // backgroundColor: '#d1d1d1',
              paddingBottom: 10,
            }}>
            <Text style={styles.headerText}>Reminder App</Text>
            <Text style={styles.headerText}>version 1.0</Text>
          </ImageBackground>
        </View>
        <View style={styles.screenContainer}>
          <TouchableOpacity
            onPress={this.navigateToScreen('Dashboard')}
            style={[
              styles.screenStyle,
              this.props.activeItemKey == 'Dashboard'
                ? styles.activeBackgroundColor
                : null,
            ]}>
            <Text
              style={[
                styles.screenTextStyle,
                this.props.activeItemKey == 'Dashboard'
                  ? styles.selectedTextStyle
                  : null,
              ]}>
              Pengingat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.navigateToScreen('JenisPuasa')}
            style={[
              styles.screenStyle,
              this.props.activeItemKey == 'JenisPuasa'
                ? styles.activeBackgroundColor
                : null,
            ]}>
            <Text
              style={[
                styles.screenTextStyle,
                this.props.activeItemKey == 'JenisPuasa'
                  ? styles.selectedTextStyle
                  : null,
              ]}>
              Jenis Puasa
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.navigateToScreen('Menu2')}
            style={[
              styles.screenStyle,
              this.props.activeItemKey == 'Menu2'
                ? styles.activeBackgroundColor
                : null,
            ]}>
            <Text
              style={[
                styles.screenTextStyle,
                this.props.activeItemKey == 'Menu2'
                  ? styles.selectedTextStyle
                  : null,
              ]}>
              Menu2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.navigateToScreen('Menu3')}
            style={[
              styles.screenStyle,
              this.props.activeItemKey == 'Menu3'
                ? styles.activeBackgroundColor
                : null,
            ]}>
            <Text
              style={[
                styles.screenTextStyle,
                this.props.activeItemKey == 'Menu3'
                  ? styles.selectedTextStyle
                  : null,
              ]}>
              Menu3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.navigateToScreen('About')}
            style={[
              styles.screenStyle,
              this.props.activeItemKey == 'About'
                ? styles.activeBackgroundColor
                : null,
            ]}>
            <Text
              style={[
                styles.screenTextStyle,
                this.props.activeItemKey == 'About'
                  ? styles.selectedTextStyle
                  : null,
              ]}>
              Tentang
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  headerContainer: {
    height: 250,
  },
  headerText: {
    color: '#fff8f8',
    marginLeft: 20,
    justifyContent: 'flex-end',
  },
  screenContainer: {
    paddingTop: 20,
    width: '100%',
  },
  screenStyle: {
    paddingVertical: 5,
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  screenTextStyle: {
    fontSize: 18,
    marginLeft: 20,
    textAlign: 'center',
    color: 'grey',
  },
  selectedTextStyle: {
    paddingVertical: 5,
    color: '#00adff',
  },
  activeBackgroundColor: {
    backgroundColor: '#F1F1F1',
    paddingVertical: 5,
  },
});

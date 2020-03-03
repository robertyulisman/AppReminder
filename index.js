/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React, {Component, Fragment} from 'react';
import App from './App';
import {name as appName} from './app.json';
import Splashscreen from './src/Pages/SplashScreen';

class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      currentScreen: 'Splash',
    };
    setTimeout(() => {
      this.setState({
        currentScreen: 'App',
      });
    }, 5000);
  }

  render() {
    const {currentScreen} = this.state;
    let mainScreen = currentScreen === 'Splash' ? <Splashscreen /> : <App />;
    // return <View>{mainScreen}</View>;
    return <Fragment>{mainScreen}</Fragment>;
  }
}

AppRegistry.registerComponent(appName, () => MainScreen);

//   AppRegistry.registerComponent(appName, () => App);

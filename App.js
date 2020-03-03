import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Dashboard from './src/Pages/Dashboard';
import Router from './config/route/Router';

class App extends Component {
  render() {
    return <Router />;
  }
}

export default App;

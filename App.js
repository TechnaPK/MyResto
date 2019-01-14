import React, { Component } from 'react';
import Home from './src/screens/Home'
import Settings from './src/screens/Settings'

import AppNavigator from './src/navigation/AppNavigator'

export default class App extends Component {
  render() {
    return (

      <AppNavigator />

    );
  }
}

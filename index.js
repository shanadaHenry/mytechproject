import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Application from './src/boot/Application';
import { Provider } from 'react-redux';
import store from './src/redux';
import {name as appName} from './app.json';

export default class demo extends Component {
  render() {
    return (
      <Provider store={store}>
        <Application/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => demo);


// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

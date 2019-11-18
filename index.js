// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/stores/configureStore';
import {name as appName} from './app.json';
import App from './src/Main';

const Mission = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Mission);

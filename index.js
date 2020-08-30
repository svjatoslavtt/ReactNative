import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

import App from './src/app/App';
import {name as appName} from './app.json';
import store from './src/app/redux/store';

export default function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

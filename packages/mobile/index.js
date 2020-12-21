import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import NavigationService from '../services/NavigationService';
import store from '../store/mobile';
import { name as appName } from './app.json';
import AppNavigator from './navigation/AppNavigator';
// import NetworkInterceptor from './screens/NetworkInterceptor';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);

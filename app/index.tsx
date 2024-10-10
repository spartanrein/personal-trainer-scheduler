import * as React from 'react';
import { PaperProvider, Text } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import App from './app';

export default function Main() {
  return (
    <PaperProvider>
      <App/>
    </PaperProvider>
  );
}

AppRegistry.registerComponent('Index', () => Main);


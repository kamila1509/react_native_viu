
import React from 'react';
import type {PropsWithChildren} from 'react';
import ShowEvents from './src/navigation/ShowEventsStack';
import {  PaperProvider} from 'react-native-paper';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';

function App(): JSX.Element {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigation>
        </Navigation>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;


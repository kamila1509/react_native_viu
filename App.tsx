
import React from 'react';
import type {PropsWithChildren} from 'react';
import ShowEvents from './src/navigation/ShowEventsStack';
import {  PaperProvider} from 'react-native-paper';
//Nagigator Container
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';


//Genera un Navigator de tipo Stack
// const Stack = createNativeStackNavigator();
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


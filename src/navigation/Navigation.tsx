import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import ShowEventsStack from './ShowEventsStack';

import TabNavigation from './TabNavigation';
const Drawer = createDrawerNavigator();
export default function Navigation(props: any) {
  return (
    // Drawer para navegar y mostrar menú lateral
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{title: 'ACTIVIDAD 2 VIU', headerTitleAlign: 'center'}}
      />
      <Drawer.Screen
        name="ShowEventsStack"
        component={ShowEventsStack}
        options={{title: 'Eventos', headerTitleAlign: 'center'}}
      />
    </Drawer.Navigator>
  );
}

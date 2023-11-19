import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import { IconButton} from 'react-native-paper';
const Tab = createBottomTabNavigator();
export default function TabNavigation(props: any) {
  const buttonHome = ({focused}: {focused: boolean}) => (
    <IconButton
      icon="home"
      iconColor={focused ? '#FF5733' : '#7F97CD'}
      size={30}
    />
  );
  const buttonInfo = ({focused}: {focused: boolean}) => (
    <IconButton
      icon="information-variant"
      iconColor={focused ? '#FF5733' : '#7F97CD'}
      size={30}
    />
  );
  const buttonEvent = () => {
    return (
      <IconButton icon="counter" iconColor={'#7F97CD'} size={30}></IconButton>
    );
  };

  return (
    //Tab.Navigator (BottomTabNavigator) usado para navegar con los iconos de la barre inferior
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarBadge: 1,
          headerTitleAlign: 'center',
          headerShown: true,
          tabBarIcon: ({focused, color}) => buttonHome({focused}),
          tabBarLabelStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutStack}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({focused, color}) => buttonInfo({focused}),
          tabBarLabelStyle: {display: 'none'},
        }}
      />
    </Tab.Navigator>
  );
}


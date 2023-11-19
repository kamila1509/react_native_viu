import React from 'react';
import { StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

import {Icon, IconButton} from 'react-native-paper';
// const Stack=createNativeStackNavigator();
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    flexDirection: 'row',
  },
  imagen: {
    width: 50,
    height: 50,
  },
  fuente: {
    flex: 1,
    marginStart: 10,
    alignSelf: 'center',
    color: '#000',
    fontSize: 24,
  },
});

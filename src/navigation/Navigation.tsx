import React, { useState } from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import ShowEventsStack from "./ShowEventsStack";

import TabNavigation from './TabNavigation';

import { Icon, IconButton } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// const Tab=createBottomTabNavigator();
const Drawer= createDrawerNavigator();
export default function Navigation(props:any){
    return(
        <Drawer.Navigator drawerContent={DrawerContent} >
            <Drawer.Screen name="TabNavigation" component={TabNavigation} 
                options={{title:'ACTIVIDAD 2 VIU',headerTitleAlign: "center"}}/>
                <Drawer.Screen name="ShowEventsStack" component={ShowEventsStack} 
                options={{title:'ShowEventsStack',headerTitleAlign: "center"}}/>




        </Drawer.Navigator>
    )
}

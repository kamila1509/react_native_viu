import React, { useState } from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import AboutStack from "./AboutStack";
import ShowEvents from "./ShowEventsStack";
const Stack=createNativeStackNavigator();

export default function HomeStack(props:any){

    return(
        <Stack.Navigator screenOptions={{headerShown: false,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            <Stack.Screen name="Home" component={Home} options={{title:'Home '}}/>
            <Stack.Screen name="AboutStack" component={AboutStack} options={{title:'AboutStack 33'}}/>
            <Stack.Screen name="ShowEvents" component={ShowEvents} options={{title:'ShowEvents'}}/>
            
        </Stack.Navigator>
    )
}
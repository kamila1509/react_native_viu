import React, { useState } from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import About from "../screens/About";

const Stack=createNativeStackNavigator();

export default function AboutStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="About" component={About} options={{title:'About 33'}}/>
            
            
            
        </Stack.Navigator>
    )
}
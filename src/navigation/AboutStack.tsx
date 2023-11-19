import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import About from "../screens/About";

const Stack=createNativeStackNavigator();
//Página informativa de la actividad 2
export default function AboutStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="About" component={About} options={{title:'About 33'}}/>
        </Stack.Navigator>
    )
}
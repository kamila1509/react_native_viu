import React, { useState } from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ReservationFormDetails from "../screens/ReservationFormDetails";
import AboutStack from "./AboutStack";
import ShowEvents from "./ShowEventsStack";
const Stack=createNativeStackNavigator();

export default function HomeStack(props:any){
//Página principal de Navegación
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} options={{title:'Home'}}/>
            <Stack.Screen name="AboutStack" component={AboutStack} options={{title:'AboutStack'}}/>
            <Stack.Screen name="ReservationFormDetails" component={ReservationFormDetails} options={{title:'ShowReservationFormDetailsStack'}}/>
        </Stack.Navigator>
    )
}
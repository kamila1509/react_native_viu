import React, { useState } from 'react';
import {
    Image,
    StyleSheet
  } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import ShowEventsStack from "./ShowEventsStack";

import { Icon, IconButton } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();

export default function TabNavigation(props:any){

    const buttonHome=()=>{
        return (
            <IconButton
                icon="home"
                iconColor={'#7F97CD'}
                size={30}></IconButton>
        )
    }
    const buttonInfo=()=>{
        return (
            <IconButton
                icon="information-variant"
                iconColor={'#7F97CD'}
                size={30}></IconButton>
        )
    }
    const buttonEvent=()=>{
        return (
            <IconButton
                icon="counter"
                iconColor={'#7F97CD'}
                size={30}></IconButton>
        )
    }

    return(
        <Tab.Navigator>
            <Tab.Screen name="HomeStack" component={HomeStack} 
                options={{title:'INICIO',tabBarBadge: 1,headerTitleAlign: "center", headerShown:true,
                tabBarIcon:({focused,color})=>buttonHome(),
                headerStyle:{backgroundColor:'#f4511e'},
                headerTintColor:'#FFFFFF',
                tabBarActiveTintColor:'#1D1B1B',
                tabBarInactiveTintColor:'#F6F4F4', 
                tabBarActiveBackgroundColor:'white',
                tabBarInactiveBackgroundColor:'#636262',   
                tabBarLabelStyle:{fontSize:20},
                headerTitleStyle:{fontWeight:'bold',},
                }
                }/>
            <Tab.Screen name="AboutStack" component={AboutStack} 
                options={{title:'INFO',headerTitleAlign: "center",tabBarIcon:()=>buttonInfo(),
                headerStyle:{backgroundColor:'#f4511e'},
                headerTintColor:'#FFFFFF',
                tabBarActiveBackgroundColor:'white',
                tabBarInactiveBackgroundColor:'#636262',   
                tabBarLabelStyle:{fontSize:20},
                headerTitleStyle:{fontWeight:'bold',},
                }}/>

            {/* <Tab.Screen name="ShowEventsStack" component={ShowEventsStack} 
            options={{
                title:'Events',headerTitleAlign: "center",tabBarIcon:()=>buttonEvent(),
                tabBarActiveBackgroundColor:'white',
                tabBarInactiveBackgroundColor:'#636262',   
                tabBarLabelStyle:{fontSize:20},
                headerShown: false

                }}/> */}

        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0,
      flexDirection: 'row'
    },
    imagen:{
        width: 50,
        height: 50,
    },
    fuente:{
        flex:1,
        marginStart:10,
        alignSelf:'center',
        color:'#000',
        fontSize:24  
    }
})
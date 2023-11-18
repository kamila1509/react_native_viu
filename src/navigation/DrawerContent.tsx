import React , {useState} from 'react';
import {DrawerContentScrollView} from "@react-navigation/drawer"
import {  Drawer } from 'react-native-paper';
import { Screen } from 'react-native-screens';

export default function DrawerContent(props:any){
    const {navigation}=props;
    const [active,setActive]=useState("Home");
    const onChangeScreen=(stack:any,screen:any)=>{
        setActive(screen)
        navigation.navigate(stack,{screen:screen})
    }
    return(
        <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item label="Inicio" active={active==="HomeStack"} onPress={()=>onChangeScreen('TabNavigation','HomeStack')}/>
            </Drawer.Section>
            <Drawer.Section>
                <Drawer.Item label="Eventos"  active={active==="ShowEventsStack"} onPress={()=>onChangeScreen('ShowEventsStack',"ShowEventsStack")}/>
            </Drawer.Section>
            <Drawer.Section>
                <Drawer.Item label="Info"  active={active==="AboutStack"} onPress={()=>onChangeScreen('TabNavigation','AboutStack')}/>
            </Drawer.Section>
        </DrawerContentScrollView>

    )

}
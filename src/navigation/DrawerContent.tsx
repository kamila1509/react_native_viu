import React , {useState} from 'react';
import {DrawerContentScrollView} from "@react-navigation/drawer"
import {  Drawer } from 'react-native-paper';

export default function DrawerContent(props:any){
    const {navigation}=props;
    const [active,setActive]=useState("Home");
    const onChangeScreen=(stack:any,screen:any)=>{
        setActive(screen)
        navigation.navigate(stack,{screen:screen})
    }
    //DrawerContentScrollView Navegador lateral con ScroolView aunque no es necesario por la cantidad de items, pero 
    //resulta intereante cuando el móvil rota utilizarlo por defecto
    return(
        <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item label="Inicio" active={active==="HomeStack"} onPress={()=>onChangeScreen('TabNavigation','HomeStack')}/>
            </Drawer.Section>
            <Drawer.Section>
                <Drawer.Item label="Eventos"  active={active==="ShowEventsStack"} onPress={()=>onChangeScreen('ShowEventsStack',"ShowEventsStack")}/>
            </Drawer.Section>
            <Drawer.Section>
                <Drawer.Item label="Información"  active={active==="AboutStack"} onPress={()=>onChangeScreen('TabNavigation','AboutStack')}/>
            </Drawer.Section>
        </DrawerContentScrollView>

    )

}
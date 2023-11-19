import React, { useState } from 'react';
import background from '../../assets/fondo.jpg';

import {
    Text, View,
    StyleSheet,
    Image,
    ScrollView,
    ImageBackground
  } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';

export default function About(props:any){
    const {navigation} =props;
    return(
        <ScrollView style={styles.container}>
            <ImageBackground source={background} resizeMode="stretch" style={styles.image}>
            <Image
              style={styles.logo}
              source={{
                uri: 'https://www.cev.es/wp-content/uploads/Logo-nuevo-VIU-web.png',
              }}
            />
            <View style={styles.linearGradient}>
              <LinearGradient colors={['#e0b594', '#E9C3B4', '#FBFAFA']}style={styles.buttonText} >
                  <Text  >ACTIVIDAD 2 06MASW_04_A_2023-24</Text>
                  <Text  >Programación en dispositivos móviles (wearables)</Text>
              </LinearGradient>
            </View>
            <View style={styles.linearGradient}>
              <LinearGradient colors={['#e0b594', '#E9C3B4', '#FBFAFA']}style={styles.buttonText} >
                  <Text  >PROFESOR: Paco Gómez Arnal</Text>
              </LinearGradient>
            </View>
            <View style={styles.linearGradient}>
              <LinearGradient colors={['#e0b594', '#E9C3B4', '#FBFAFA']}style={styles.buttonText} >
                  <Text  >AUTORES:</Text>
              </LinearGradient>
            </View>
            <View style={styles.linearGradient}>
              <LinearGradient colors={['#FBFAFA', '#E9C3B4', '#e0b594']}style={styles.buttonText} >
                  <Text  >Camila Micaela Urquizo Suca</Text>
                  <Text  ></Text>
                  <Text  >Alejandro Vázquez Menéndez</Text>
                  <Text  ></Text>
                  <Text  >David Lima Granada</Text>
              </LinearGradient>
            </View>
            </ImageBackground>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
      backgroundColor:'#FFFFFF',
      flex:1
    },
    logo: {
      width: 350,
      height: 200,
      alignSelf:'center',
      marginTop:50,
      borderRadius: 30 
    },
    linearGradient:{
      alignSelf:'center',
      margin:10,
    },
    buttonText:{
      alignItems: 'center',
      padding:20,
      marginTop:30,
      borderRadius: 10 
    },
    image: {
      flex: 1,
      // resizeMode: 'cover',
      
      width: '100%',
      height: '100%'
      // objectFit: 'fill'
      // resizeMode: 'cover', // or 'stretch'
    },
    text:{
        color:'#FFFFFF',
        textAlign:'center'
    }
});

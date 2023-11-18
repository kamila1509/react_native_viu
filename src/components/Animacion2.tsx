import React , {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, Button, Animated, View, Easing} from 'react-native';

const Animacion = ()=>{
    const spinValue=new Animated.Value(0);
    Animated.loop(
    Animated.timing(
        spinValue,
      {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear, // Easing is an additional import from react-native linear
        useNativeDriver: true  // To make use of native driver for performance
      }
    )).start()
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })
    return (
        <Animated.Image
        style={{transform: [{rotate: spin}] }}
        // source={require('./viu.png')} />
        source={require('./stars.jpg')} />

    )

}
export default Animacion;
const styles = StyleSheet.create({

    text:{
        color:'#FFFFFF',
        textAlign:'center'
    },  
    color:{
        backgroundColor:'#110099'
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: 'powderblue',
      },
});

import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function TituloLogo(props: any) {
  return (
    <View style={styles.container}>
        <Image 
        style={styles.imagen}
        source={require('../../assets/pickle-rick.jpeg')} />
        <Text style={styles.fuente}>{props.titulo}</Text>
    </View>
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
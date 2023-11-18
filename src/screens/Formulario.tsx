import React, { useState } from 'react';
import {
    Text, View,
    StyleSheet,
    Button,
    Pressable,
    Modal,
    TextInput,
    SafeAreaView,
    ImageBackground
  } from 'react-native';
  
  const image = {uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b1997507-606b-44bc-a6c8-dd0740cb1f88/d41a0ml-4cc369c9-a067-4f5a-8176-06364ee21c94.png/v1/fill/w_1131,h_707,q_70,strp/mac_os_x_andromeda_galaxy_png_by_vuvuzelahero_d41a0ml-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAwMCIsInBhdGgiOiJcL2ZcL2IxOTk3NTA3LTYwNmItNDRiYy1hNmM4LWRkMDc0MGNiMWY4OFwvZDQxYTBtbC00Y2MzNjljOS1hMDY3LTRmNWEtODE3Ni0wNjM2NGVlMjFjOTQucG5nIiwid2lkdGgiOiI8PTMyMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.aDVCVyEpegfdmn1mBryrIa6felycPBBTv7w1QedftnU'};
export default function Formulario (props:any) {
  const  {modalVisible,setModalVisible}=props;
    const [nombre,setNombre]=useState('')
    const fBoton2= ()=>{
        console.log("PULSASTE2!!")
        setModalVisible(!modalVisible)
      }
    return(
        <Modal 
        animationType='slide'
        statusBarTranslucent={true}
        visible={modalVisible}>
        
        <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
        <SafeAreaView style={styles.container}>
        
            
            <Pressable style={styles.btn1}  onPress={fBoton2}>
            <Text style={styles.btntext}>VOLVER</Text>
            </Pressable>
            <View style={styles.campo}>
              
                <Text style={styles.label}>
                    ¿EDAD?
                </Text>
                <TextInput 
                    // keyboardType='phone-pad'
                    keyboardType='phone-pad'
                    style={styles.input}
                    placeholder='Puedes mentir...'
                    placeholderTextColor={'#787'}
                    // value={setNombre}
                    maxLength={10}
                    autoCorrect={false}
                    underlineColorAndroid={'transparent'}
                />
                <Text style={styles.label}>
                    Cuenta algo!!!
                </Text>
                <TextInput 
                    // keyboardType='phone-pad'
                    keyboardType='default'
                    style={styles.input}
                    placeholder='Lo que sea...'
                    placeholderTextColor={'#787'}
                    // value={setNombre}
                    multiline={true}
                    numberOfLines={2}
                    maxLength={50}
                    autoCorrect={false}
                    underlineColorAndroid={'transparent'}
                />
            </View>
            
        </SafeAreaView>
        </ImageBackground>
            
        
      </Modal>
    )
}
const styles = StyleSheet.create({
    campo:{
        margin:30,
        fontSize:30,
        textAlign:'center'
    },
    image: {
      flex: 1,
      width: null, 
      height: null,
      resizeMode: 'cover'
    },
    label:{
        color:'#0E0E0E',
        marginVertical:15,
        fontSize:25,
        textAlign:'center',
        fontWeight:'bold'
        
    },
    input:{
        backgroundColor:'#FFF',
        color:'#F00',
        padding:10,
        fontSize:20,
        // textAlign:'center',
        borderRadius:10,
        height:100
    },
    container:{
      // backgroundColor:'#6D28D9',
      flex:1
    },
    titulo:{
      textAlign: 'center',
      marginTop:20,
      textTransform:'uppercase',
      fontSize:30,
      color: '#FF4151',
      fontWeight:'bold'
    },
    titulo2:{
      color:'#00ff00'
    },
    btn1:{
      margin:50,
      backgroundColor:'#6622DD',
      padding:20,
      borderRadius:10
      
    },
    btntext:{
      color:'white',
      fontWeight:'bold',
      fontSize:20,
      textTransform:'uppercase',
      textAlign:'center'
    }
  })
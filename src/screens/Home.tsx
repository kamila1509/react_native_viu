import React, { useState } from 'react';
import  Formulario from  './Formulario';
import {
    Text, View,
    StyleSheet,
    Button,
    Pressable,
    Modal,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground
  } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';
// const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
const image = {uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b1997507-606b-44bc-a6c8-dd0740cb1f88/d41a0ml-4cc369c9-a067-4f5a-8176-06364ee21c94.png/v1/fill/w_1131,h_707,q_70,strp/mac_os_x_andromeda_galaxy_png_by_vuvuzelahero_d41a0ml-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAwMCIsInBhdGgiOiJcL2ZcL2IxOTk3NTA3LTYwNmItNDRiYy1hNmM4LWRkMDc0MGNiMWY4OFwvZDQxYTBtbC00Y2MzNjljOS1hMDY3LTRmNWEtODE3Ni0wNjM2NGVlMjFjOTQucG5nIiwid2lkdGgiOiI8PTMyMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.aDVCVyEpegfdmn1mBryrIa6felycPBBTv7w1QedftnU'};
export default function Home(props:any){
    const {navigation} =props;
    const [modalVisible, setModalVisible] = useState(false);
    const fBotonModal= ()=>{
      console.log("PULSASTE Modal!!")
      setModalVisible(!modalVisible)
    }
    return(
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
            <View style={styles.linearGradient}>
              <LinearGradient colors={['#D4440B', '#E9C3B4', '#FBFAFA']} style={styles.buttonText}>
                <TouchableOpacity onPress={()=>navigation.navigate("ShowEventsStack")} >
                  <Text   >EVENTOS</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View style={styles.linearGradient}>
              <LinearGradient colors={['#D4440B', '#E9C3B4', '#FBFAFA']}style={styles.buttonText} >
                <TouchableOpacity onPress={fBotonModal}>
                  <Text  >FORMULARIO</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

            <View style={styles.linearGradient}>
              <LinearGradient colors={['#D4440B', '#E9C3B4', '#FBFAFA']}style={styles.buttonText} >
                <TouchableOpacity onPress={()=>navigation.navigate('TabNavigation',"AboutStack")}>
                
                  <Text  >INFO</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <Formulario
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />

              </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      backgroundColor:'#FFFFFF',
      flex:1
    },
    linearGradient:{
      alignSelf:'center',
      margin:10,
    },
    buttonText:{
      alignItems: 'center',
      padding:10,
      width:150,
      marginTop:50,
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
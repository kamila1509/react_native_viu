import React, { useState } from 'react';
import  Formulario from  './Formulario';
import fondo from '../../assets/fondo3.jpg';
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
export default function Home(props:any){
    const {navigation} =props;
    const [modalVisible, setModalVisible] = useState(false);
    const fBotonModal= ()=>{
      setModalVisible(!modalVisible)
    }
    return(
        <View style={styles.container}>
            <ImageBackground source={fondo} resizeMode="stretch" style={styles.image}>
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
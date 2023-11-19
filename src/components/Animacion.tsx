import React , { useRef} from 'react';
import { StyleSheet, Text, Button, Animated, View} from 'react-native';

const Animacion = ()=>{
    const fadeAnim=useRef(new Animated.Value(0)).current
    const fadeIn = ()=>{
        Animated.timing(
            fadeAnim , {
                toValue: 1,
                duration: 4000,
                useNativeDriver: true
            }).start();
    };
    const fadeOut = ()=>{
        Animated.timing(
            fadeAnim , {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true
            }).start();
    };
    return (
        <Animated.View style={[styles.fadingContainer,
        {opacity:fadeAnim},]}>
            <View style={styles.color}>

            <Text style={styles.text}>Animación!</Text>
            <Button title="Fade In View" onPress={fadeIn} />
            <Button title="Fade Out View" onPress={fadeOut} />
            </View>
        </Animated.View>
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

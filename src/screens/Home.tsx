import React, {useState} from 'react';
import ReservationForm from './ReservationForm';
import fondo from '../../assets/fondo3.jpg';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  Modal,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default function Home(props: any) {
  const {navigation} = props;
  const gradientColor=['#D4440B', '#E9C3B4']
  const [modalVisible, setModalVisible] = useState(false);
  const fBotonModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={fondo} resizeMode="stretch" style={styles.image}>
        <View style={styles.linearGradient}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ShowEventsStack')}>
            <LinearGradient
              colors={gradientColor}
              style={styles.buttonText}>
              <Text style={styles.buttonTextColor}>EVENTOS</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.linearGradient}>
          <TouchableOpacity onPress={fBotonModal}>
            <LinearGradient
              colors={gradientColor}
              style={styles.buttonText}>
              <Text style={styles.buttonTextColor}>FORMULARIO</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.linearGradient}>
          <TouchableOpacity
            onPress={() => navigation.navigate( 'AboutStack')}>
            <LinearGradient
              colors={gradientColor}
              style={styles.buttonText}>
              <Text style={styles.buttonTextColor}>INFO</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <ReservationForm
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  linearGradient: {
    alignSelf: 'center',
    margin: 10,
  },
  buttonText: {
    alignItems: 'center',
    padding: 10,
    width: 150,
    marginTop: 50,
    borderRadius: 10,
  },
  buttonTextColor: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

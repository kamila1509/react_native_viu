import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity , Linking, Platform, Image} from 'react-native';
import MapView,{ Marker } from 'react-native-maps';

const MapPreview = ({ location }) => {
  // location debe ser un objeto con las propiedades 'latitude' y 'longitude'
  const { latitude, longitude } = location;
  const handleOpenMap = () => {
    // Crea una URL con las coordenadas y abre Google Maps
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(mapUrl).catch((err) => console.error('Error al abrir la URL: ', err));
  };

  return (
    <View style={styles.container}>
    {Platform.OS === 'ios' ? (
       <MapView
       style={styles.map}
       initialRegion={{
         latitude,
         longitude,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421,
       }}
     >
       <Marker coordinate={{ latitude, longitude }} />
     </MapView>
    ): (
      <Image
    style={{width:'100%'}}
      source={require('../../assets/maps.png')} />
    )}
      <TouchableOpacity style={styles.openMapButton} onPress={handleOpenMap}>
        <Text style={styles.buttonText}>Abrir en Google Maps</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200, // Ajusta la altura según tus necesidades
  },
  map: {
    flex: 1,
  },
  openMapButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'orange',
    fontWeight: 'bold',
  }
});

export default MapPreview;

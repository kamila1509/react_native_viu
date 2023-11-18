import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapPreview = ({ location }) => {
  // location debe ser un objeto con las propiedades 'latitude' y 'longitude'
  const { latitude, longitude } = location;

  return (
    <View style={styles.container}>
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
});

export default MapPreview;

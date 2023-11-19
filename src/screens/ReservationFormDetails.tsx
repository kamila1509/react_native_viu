import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {IconButton} from 'react-native-paper';

const ReservationFormDetails = ({route, navigation}) => {
  const { reservationDetails } = route.params;

  const navigateToHome = () => {
    // Navigate to the home screen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Detalles de la Reserva</Text>

        <View style={styles.invoiceSection}>
          <View style={styles.row}>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.value}>{reservationDetails.name}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Edad:</Text>
            <Text style={styles.value}>{reservationDetails.age}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Fecha de Reserva:</Text>
            <Text style={styles.value}>{reservationDetails.date.toDateString()}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Descripción:</Text>
            <Text style={styles.value}>{reservationDetails.description}</Text>
          </View>
        </View>

        <Text style={styles.total}>Gracias por realizar su reserva!</Text>

        <TouchableOpacity style={styles.downloadButton} onPress={()=>{}}>
          <Text style={styles.downloadButtonText}>Descargar comprobante</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.homeButton} onPress={navigateToHome}>
        <Text style={styles.homeButtonText}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
    margin: 16,
  },
  container: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  invoiceSection: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 16,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#27ae60',
  },
  downloadButton: {
    backgroundColor: '',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  downloadButtonText: {
    color: '#3498db',
    fontSize: 16,
  },
  homeButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  homeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ReservationFormDetails;

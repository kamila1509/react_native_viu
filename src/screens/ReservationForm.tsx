import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Modal,
  TextInput,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import image from '../../assets/fondo3.jpg';
//Formulario de reservas
const ReservationForm = ({ modalVisible, setModalVisible }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const navigation = useNavigation();

  const closeModalButton = () => {
    setModalVisible(!modalVisible);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (selectedDate) => {
    hideDatePicker();
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const resetForm = () => {
    setName('');
    setAge('');
    setDate(new Date());
    setDescription('');
  };

  const handleReservation = () => {
    navigation.navigate('ReservationFormDetails', { reservationDetails: { name, age, date, description } });

    // Close the modal if applicable
    setModalVisible(false);
    resetForm();
  };

  return (
    <Modal
      animationType="slide"
      statusBarTranslucent={true}
      visible={modalVisible}>
      <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
        <SafeAreaView style={styles.container}>
          <IconButton
            icon="arrow-left"
            color="blue"
            size={30}
            onPress={closeModalButton}
            style={styles.backButton}
          />
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View>
              <Text style={styles.label}>Nombre:</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Ingrese su nombre"
              />
              <Text style={styles.label}>Edad:</Text>
              <TextInput
                style={styles.input}
                value={age}
                onChangeText={(text) => setAge(text)}
                placeholder="Ingrese su edad"
                keyboardType="numeric" // Set keyboardType to 'numeric' for numeric input
              />
              <Text style={styles.label}>Fecha:</Text>
              <View style={styles.datePickerContainer}>
                <Button title="Seleccione la fecha" onPress={showDatePicker} style={styles.dateButton} />
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleDateConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
              <Text style={styles.label}>Descripción:</Text>
              <TextInput
                style={[styles.input, styles.multilineInput]}
                value={description}
                onChangeText={(text) => setDescription(text)}
                placeholder="Ingrese detalles adicionales"
                multiline
                numberOfLines={4}
              />
              <TouchableOpacity onPress={handleReservation} style={styles.reservationButton}>
                <Text style={styles.reservationButtonText}>Hacer Reservación</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  label: {
    color: '#0E0E0E',
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#FFF',
    borderRadius: 5
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  datePickerContainer: {
    marginBottom: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  dateButton: {
    marginBottom: 16,
    backgroundColor: '#3498db',
  },
  reservationButton: {
    backgroundColor: '#27ae60',
    padding: 10,
    borderRadius: 2,
    alignItems: 'center',
    marginTop: 30
  },
  reservationButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ReservationForm;
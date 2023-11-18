import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { IconButton } from 'react-native-paper';
import MapPreview from './MapPreview';

const EventDetailsScreen = ({ route, navigation }) => {
  const { event } = route.params;

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: event.image }} style={styles.image} />
        <IconButton
          icon="close"
          color="#FFF"
          size={30}
          style={styles.closeButton}
          onPress={handleBackPress}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.dateLocation}>{`${event.date} - ${event.location}`}</Text>
        <Text style={styles.description}>{event.description}</Text>
        {/* Agrega más detalles del evento según sea necesario */}
    <Pressable style={styles.mapContainer}>
            <MapPreview location={{ latitude: 41.3851, longitude: 2.1734 }} />
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: 200,
    position: 'relative',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateLocation: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    lineHeight: 24,
  },
    mapContainer: {
        marginVertical: 15
    }  
});

export default EventDetailsScreen;

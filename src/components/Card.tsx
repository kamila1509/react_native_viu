import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ event }) => {
  const { title, date, location, image } = event;

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.backgroundImage} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.dateLocation}>{`${date} - ${location}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 20,
    elevation: 5, // Sombra en Android
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  cardContent: {
    position: 'absolute',
    backgroundColor:'#706E6E',
    opacity:0.8,
    borderRadius: 10,
    paddingHorizontal:5,
    bottom: 20,
    left: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
  },
  dateLocation: {
    marginTop: 5,
    fontSize: 14,
    color: '#fff'
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: '#fff',
  },
});

export default Card;

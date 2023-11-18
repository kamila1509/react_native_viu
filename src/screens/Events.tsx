import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import events from '../data/eventos.json';
import Card from '../components/Card';

const Events = () => {

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Eventos en tu área:</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
         <Card event={item}></Card>
        )}
      />
    </SafeAreaView>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 25,
    color: 'orange',
    fontWeight: "600",
    padding: 10
  }
})
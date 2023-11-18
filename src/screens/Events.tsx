import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import events from '../data/eventos.json';
import Card from '../components/Card';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Events = ({ navigation }) => {
  const eventDetails = (event) => {
    navigation.navigate('EventDetails', { event });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Eventos en tu área:</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => eventDetails(item)}>
            <Card event={item}></Card>
          </Pressable>
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
    fontWeight: '600',
    padding: 10,
  },
});

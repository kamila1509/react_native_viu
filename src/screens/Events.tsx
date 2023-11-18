import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import events from '../data/eventos.json';
import HTMLView from 'react-native-htmlview';
import Card from '../components/Card';

const Events = () => {

  return (
    <View>
      <Text>Eventos en tu área:</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
         <Card event={item}></Card>
        )}
      />
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({
})
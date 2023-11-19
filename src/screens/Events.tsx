import React from 'react';
import { Text, FlatList, StyleSheet, SafeAreaView, Pressable, ImageBackground } from 'react-native';
import events from '../data/eventos.json';
import Card from '../components/Card';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import background from '../../assets/fondo2.jpg';

const Stack = createNativeStackNavigator();

const Events = ({ navigation }) => {
  const eventDetails = (event) => {
    navigation.navigate('EventDetails', { event });
  };
//Página de consulta de eventos y navegación entre eventos
  return (
    <SafeAreaView style={styles.container}>
       <ImageBackground source={background} resizeMode="stretch" >
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
      </ImageBackground>
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
    backgroundColor:'white',
    fontWeight: '600',
    padding: 10,
  },
});

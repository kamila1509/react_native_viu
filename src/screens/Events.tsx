import React from 'react';
import { View, Text, FlatList } from 'react-native';

const Events = () => {
  // Datos de ejemplo para eventos
  const events = [
    { id: 1, title: 'Evento 1', date: '2023-11-15', location: 'Ciudad A' },
    { id: 2, title: 'Evento 2', date: '2023-11-20', location: 'Ciudad B' },
    // Agrega más eventos aquí
  ];

  return (
    <View>
      <Text>Eventos en tu área:</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>Fecha: {item.date}</Text>
            <Text>Ubicación: {item.location}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Events;

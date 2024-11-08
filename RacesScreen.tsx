import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const RacesScreen = () => {
  const racesData = [
    { raceName: 'Maratón de la Ciudad', date: '2024-11-15', participants: ['Carlos Gómez', 'Laura Méndez', 'Juan Pérez'] },
    { raceName: 'Carrera 5K Playa', date: '2024-12-01', participants: ['Ana López', 'Felipe Díaz', 'Marta Sánchez'] },
    { raceName: 'Ultra Trail Montaña', date: '2025-01-10', participants: ['Sofía Torres', 'Pedro Fernández', 'Luis Rodríguez'] },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carreras Futuras</Text>
      <ScrollView style={styles.racesContainer}>
        {racesData.map((race, index) => (
          <View key={index} style={styles.raceItem}>
            <Text style={styles.raceName}>{race.raceName}</Text>
            <Text style={styles.raceDate}>Fecha: {race.date}</Text>
            <Text style={styles.raceParticipants}>Participantes:</Text>
            {race.participants.map((participant, idx) => (
              <Text key={idx} style={styles.raceParticipant}>{participant}</Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 20,
  },
  racesContainer: {
    width: '100%',
    marginTop: 20,
  },
  raceItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  raceName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  raceDate: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  raceParticipants: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  raceParticipant: {
    fontSize: 16,
    color: '#555',
  },
});

export default RacesScreen;

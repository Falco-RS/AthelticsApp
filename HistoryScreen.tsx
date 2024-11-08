import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HistoryScreen = () => {
  const historyData = [
    { race: 'Carrera 1', time: '12:34', date: '2024-10-10' },
    { race: 'Carrera 2', time: '11:56', date: '2024-10-15' },
    { race: 'Carrera 3', time: '13:10', date: '2024-10-20' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Tiempos</Text>
      <ScrollView style={styles.historyContainer}>
        {historyData.map((item, index) => (
          <View key={index} style={styles.historyItem}>
            <Text style={styles.historyText}>Carrera: {item.race}</Text>
            <Text style={styles.historyText}>Tiempo: {item.time}</Text>
            <Text style={styles.historyText}>Fecha: {item.date}</Text>
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
  historyContainer: {
    width: '100%',
    marginTop: 20,
  },
  historyItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  historyText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
});

export default HistoryScreen;

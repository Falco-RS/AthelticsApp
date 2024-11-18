import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface Carreras{
  race: string,
  time: string,
  date: string
}

const HistoryScreen = () => {
  const [myTimes, setMyTimes] = useState<Carreras[]>([]);

  const fetchTimes = async () => {
    try {
      const response = await fetch('http://192.168.11.150:5000/get_times', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          host: 'localhost',
          dbname: 'db_carreras',
          user: 'postgres',
          password: 'marr5604',
          port: 8002,
          cedula: '123',
        }),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      const json = await response.json();
      setMyTimes(json.data);
      console.log(myTimes);
    } catch (error) {
      console.error('Error al obtener los tiempos:', error);
      return null;
    }
  };

  useEffect(() => {
    fetchTimes();
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Tiempos</Text>
      <ScrollView style={styles.historyContainer}>
        {myTimes.map((item, index) => (
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

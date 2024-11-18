import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
interface Races{
  raceName: string,
  date: string,
  participants: string[]
}
const RacesScreen = () => {
  const [myRaces, setMyRaces] = useState<Races[]>([]);
  const fetchTimes = async () => {
    try {
      const response = await fetch('http://192.168.11.150:5000/get_carreras', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          host: 'localhost',
          dbname: 'db_carreras',
          user: 'postgres',
          password: 'marr5604',
          port: 8000,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      const json = await response.json();
      setMyRaces(json.data);
      console.log(myRaces);
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
      <Text style={styles.title}>Carreras Futuras</Text>
      <ScrollView style={styles.racesContainer}>
        {myRaces.map((race, index) => (
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

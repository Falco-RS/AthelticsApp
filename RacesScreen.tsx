import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

/**
 * Interfaz `Races`.
 * 
 * Define la estructura de un objeto de carrera, que incluye:
 * - `raceName`: Nombre de la carrera.
 * - `date`: Fecha en que se llevará a cabo la carrera.
 * - `participants`: Lista de participantes en la carrera.
 */
interface Races{
  raceName: string,
  date: string,
  participants: string[]
}

/**
 * Componente `RacesScreen`.
 * 
 * Este componente muestra una lista de carreras futuras, obtenida desde una API.
 * Para cada carrera, se muestra su nombre, fecha y la lista de participantes.
 * 
 * @returns {JSX.Element} - La vista del componente que muestra las carreras futuras.
 */
const RacesScreen = () => {
  const [myRaces, setMyRaces] = useState<Races[]>([]);

  /**
   * Función que obtiene la lista de carreras desde la API.
   * 
   * Realiza una solicitud POST a la API para obtener las carreras futuras y sus participantes.
   * Luego, actualiza el estado `myRaces` con los datos obtenidos.
   */
  const fetchTimes = async () => {
    try {
      const response = await fetch('http://192.168.0.16:5000/get_carreras', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          host: 'localhost',
          dbname: 'db_carreras',
          user: 'postgres',
          password: 'Jojadaya',
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

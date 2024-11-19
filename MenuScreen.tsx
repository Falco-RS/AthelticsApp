import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {useUserStore} from "./store";

const MenuScreen = ({ navigation }: any) => {


  const {name} = useUserStore();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido, {name}!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('History')}  
      >
        <Text style={styles.buttonText}>Historial de Tiempos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Races')}  
      >
        <Text style={styles.buttonText}>Carreras</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Chat')} 
      >
        <Text style={styles.buttonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MenuScreen;

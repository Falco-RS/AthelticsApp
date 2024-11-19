import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {useUserStore} from "./store";

/**
 * Componente `HomeScreen`.
 * 
 * Pantalla principal de la aplicación, que permite al usuario navegar a la pantalla de registro
 * o iniciar sesión. Se presenta un título de la aplicación y dos botones para realizar las acciones
 * de registro o inicio de sesión.
 * 
 * @param {Object} navigation - Propiedades de navegación proporcionadas por React Navigation.
 * @returns {JSX.Element} - La vista principal de la pantalla de inicio con los botones de navegación.
 */
const HomeScreen = ({ navigation }: any) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Athletics App</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Register')} 
      >
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Login')}  
      >
        <Text style={styles.buttonText}>Iniciar sesión</Text>
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
  title: {
    fontSize: 32,
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

export default HomeScreen;


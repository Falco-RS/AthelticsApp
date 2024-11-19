import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {useUserStore} from "./store";

/**
 * Componente `LoginScreen`.
 * 
 * Esta pantalla permite al usuario iniciar sesión en la aplicación. El usuario ingresa su correo y contraseña,
 * y el componente se encarga de enviar los datos a la API para verificar la autenticidad de las credenciales.
 * Si la autenticación es exitosa, el usuario será redirigido al menú principal.
 * 
 * @param {any} navigation - Propiedad que permite la navegación a otras pantallas de la aplicación.
 * @returns {JSX.Element} - Retorna la vista del componente con los campos de correo, contraseña y el botón de inicio de sesión.
 */
const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useUserStore();

  /**
   * Función para realizar la solicitud de autenticación al servidor.
   * 
   * Esta función envía una solicitud POST a la API para verificar las credenciales del usuario (correo y contraseña).
   * Si la autenticación es exitosa, los datos del usuario se almacenan en el estado global (store).
   * 
   * @returns {boolean} - Retorna `true` si la autenticación fue exitosa, `false` si ocurrió un error.
   */
  const fetchUser = async () => {
    try {
      const response = await fetch('http://192.168.0.16:5000/sign_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          host: 'localhost',
          dbname: 'db_carreras',
          user: 'postgres',
          password: 'Jojadaya',
          port: 8002,
          email: email,
          passwordUser: password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      const json = await response.json();
      setUser(json.data);
      console.log(json);
      return true;
    } catch (error) {
      console.error('Error al obtener los tiempos:', error);
      return false;
    }
  };

  /**
   * Función que maneja el proceso de inicio de sesión.
   * 
   * Llama a la función `fetchUser` para realizar la autenticación. Si la autenticación es exitosa,
   * navega a la pantalla de "Menu".
   */
  const handleLogin = async () => {
    if (await fetchUser()) {
      navigation.navigate('Menu');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
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

export default LoginScreen;


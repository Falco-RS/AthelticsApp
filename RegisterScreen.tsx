import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aquí iría la lógica de registro (por ejemplo, validación o API)
    // Por ahora solo navegamos de vuelta a la pantalla de inicio
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de Usuario"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Correo"
        keyboardType="email-address"
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

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.linkButton}
        onPress={() => navigation.navigate('Home')}  
      >
        <Text style={styles.linkText}>Ya tienes cuenta? Iniciar sesión</Text>
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
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
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
  linkButton: {
    marginTop: 10,
  },
  linkText: {
    color: '#4a90e2',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;

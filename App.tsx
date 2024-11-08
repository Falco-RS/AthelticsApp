import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import MenuScreen from './MenuScreen';
import HistoryScreen from './HistoryScreen';  
import RacesScreen from './RacesScreen';  
import ChatScreen from './ChatScreen';  

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Bienvenido a Athletics App' }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Iniciar sesión' }} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ title: 'Registrarse' }} 
        />
        <Stack.Screen 
          name="Menu" 
          component={MenuScreen} 
          options={{ title: 'Menú Principal' }} 
        />
        <Stack.Screen 
          name="History" 
          component={HistoryScreen} 
          options={{ title: 'Historial de Tiempos' }} 
        />
        <Stack.Screen 
          name="Races" 
          component={RacesScreen} 
          options={{ title: 'Carreras Futuras' }} 
        />
        <Stack.Screen 
          name="Chat" 
          component={ChatScreen} 
          options={{ title: 'Chat' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


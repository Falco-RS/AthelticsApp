import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {Message, UserChat} from "./types";
import {useUserStore} from "./store";

const ChatScreen = () => {
  const [selectedContact, setSelectedContact] = useState<UserChat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newmessage, setNewMessage] = useState<string>('');
  const {id} = useUserStore();

  const [contacts, setContacts] = useState<UserChat[]>([]);

  const handleSelectContact = (contact: UserChat) => {
    setSelectedContact(contact);

  };

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://192.168.11.150:5000/get_mensajes', {
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
          cedula_remi:id,
          cedula_dest:selectedContact?.id,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      const json = await response.json();
      setMessages(json.data);
      console.log(json);
    } catch (error) {
      console.error('Error al obtener los tiempos:', error);
    }
  };

  const fetchParticipantes = async () => {
    try {
      const response = await fetch('http://192.168.11.150:5000/get_participantes', {
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
        }),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      const json = await response.json();
      setContacts(json.data);
      console.log(json);
    } catch (error) {
      console.error('Error al obtener los tiempos:', error);
    }
  };

  const handleSendMessage = () => {
    console.log(`Mensaje a ${selectedContact}: ${messages}`);
    setNewMessage('');
  };

  useEffect(() => {
    fetchParticipantes();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <ScrollView style={styles.contactList}>
          {contacts.map((contact) => (
            <TouchableOpacity style={styles.contactItem} onPress={() => handleSelectContact(contact)}>
              <Text style={styles.contactText}>{contact.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.chatBox}>
          {selectedContact ? (
            <View>
              <Text style={styles.chatTitle}>Chat con {selectedContact.name}</Text>
              <Text style={styles.chatTitle}>ID: {selectedContact.id}</Text>
              <ScrollView style={styles.messageContainer}>
                {messages.map((message) => (
                    <View>
                      <Text style={styles.chatTitle}>ID: {message.id}</Text>
                      <Text style={styles.chatTitle}>{message.content}</Text>
                    </View>
                ))}
              </ScrollView>
              <TextInput
                style={styles.input}
                placeholder="Escribe tu mensaje"
                value={newmessage}
                onChangeText={setNewMessage}
              />
              <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
                <Text style={styles.buttonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Text style={styles.selectContactText}>Selecciona un contacto para comenzar el chat</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
  },
  chatContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  contactList: {
    width: '30%',
    backgroundColor: '#fff',
    padding: 10,
    borderRightWidth: 1,
    borderColor: '#ddd',
  },
  contactItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#4a90e2',
    borderRadius: 8,
  },
  contactText: {
    color: '#fff',
    fontSize: 18,
  },
  chatBox: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  chatTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  messageContainer: {
    flex: 1,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    fontSize: 16,
    marginBottom: 10,
  },
  sendButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    width: '30%',
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectContactText: {
    fontSize: 18,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ChatScreen;

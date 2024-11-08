import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ChatScreen = () => {
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  const contacts = [
    'Carlos Gómez',
    'Laura Méndez',
    'Juan Pérez',
    'Ana López',
    'Felipe Díaz',
  ];

  const handleSelectContact = (contact: string) => {
    setSelectedContact(contact);  
    setMessage('');  
  };

  const handleSendMessage = () => {
    console.log(`Mensaje a ${selectedContact}: ${message}`);
    setMessage(''); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <ScrollView style={styles.contactList}>
          {contacts.map((contact, index) => (
            <TouchableOpacity key={index} style={styles.contactItem} onPress={() => handleSelectContact(contact)}>
              <Text style={styles.contactText}>{contact}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.chatBox}>
          {selectedContact ? (
            <View>
              <Text style={styles.chatTitle}>Chat con {selectedContact}</Text>
              <ScrollView style={styles.messageContainer}>
                {/* Aquí aparecerían los mensajes */}
              </ScrollView>
              <TextInput
                style={styles.input}
                placeholder="Escribe tu mensaje"
                value={message}
                onChangeText={setMessage}
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

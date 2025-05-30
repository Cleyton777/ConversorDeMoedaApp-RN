import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Aqui você teria a lógica de autenticação real (se houvesse backend)
    // Para este exemplo frontend puro, vamos apenas navegar para a tela de conversão
    navigation.navigate('Converter');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="user"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="to Enter" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F2F5', // Fundo cinza claro, igual às outras telas
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32, // Título maior
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 50, // Mais espaço abaixo do título
  
  },
  inputContainer: {
    width: '80%', // Container para os inputs
    marginBottom: 30, // Espaço abaixo dos inputs
  },
  input: {
    width: '100%', // Ocupa a largura do inputContainer
    height: 50, // Mais alto
    paddingHorizontal: 15,
    marginBottom: 15, // Espaço entre os inputs
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10, // Bordas arredondadas
    fontSize: 18, // Texto maior
    backgroundColor: '#FFF', // Fundo branco
    shadowColor: '#000', // Sombra suave
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // Sombra para Android
  },
});

export default LoginScreen;
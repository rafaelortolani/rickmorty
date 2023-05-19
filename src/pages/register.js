import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CadastroUsuario({ navigation }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('');

  function handleSalvar() {
    // lógica para salvar os dados do usuário
    // ...
    navigation.navigate('login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setNome}
        value={nome}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        onChangeText={setTelefone}
        value={telefone}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        onChangeText={setCpf}
        value={cpf}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Curso"
        onChangeText={setCurso}
        value={curso}
      />
      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#2196F3',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

import React, { Component } from 'react';
import { Keyboard, ActivityIndicator, Text } from 'react-native';
import api from '../services/api';
import { Container, Form, Input, SubmitButton, List, User, Avatar, Name,  ProfileButton, ProfileButtonText } from './styles';

export default class Personagem extends Component {
  state = {
    characters: [],
    loading: false,
    newCharacter: ''
  };

  handleAddCharacter = async () => {
    const { characters, newCharacter } = this.state;

    try {
      this.clearCharacters();
      this.setState({ loading: true });

      const response = await api.get(`/api/character/?name=${newCharacter}`);
      
      const dados = response.data.results.map(result => ({
        id: result.id,
        name: result.name,
        status: result.status,
        species: result.species,
        gender: result.gender,
        image : result.image
      }));
      
      this.setState({
        characters: [...characters, ...dados],
        newCharacter: '',
        loading: false,
      });

      Keyboard.dismiss();
    } catch (error) {
      console.log(error);
    }
  };
  
  clearCharacters = () => {
    this.setState({ characters: [] });
  };

  render() {
    const { characters, newCharacter, loading } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Adicionar personagem'
            value={newCharacter}
            onChangeText={text => this.setState({ newCharacter: text })}
            returnKeyType='send'
            onSubmitEditing={this.handleAddCharacter}
          />
          <SubmitButton loading={loading} onPress={this.handleAddCharacter}>
            {loading ? <ActivityIndicator color='#fff' /> : <Text style={{ color: '#fff' }}>Adicionar</Text>}
          </SubmitButton>
        </Form>

        <List
          showVerticalScrollIndicator={false}
          data={characters}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
          <User>
             <Avatar source={{ uri: item.image }} />
             <Name>{item.name}</Name>
             <ProfileButton onPress={() => {
                this.props.navigation.navigate('card', { route: item  });
              }}>
                <ProfileButtonText>Ver Perfil</ProfileButtonText>
              </ProfileButton>

              <ProfileButton onPress={() => { 
                this.setState({ characters: characters.filter(character => character.id !== item.id) })
              }}
                style={{backgroundColor: '#FFC0CB'}}
              >
                <ProfileButtonText>Excluir</ProfileButtonText>
              </ProfileButton>
          </User>
          //<Card route={ item }/>
          )}
        />
      </Container>
    );
  }
}

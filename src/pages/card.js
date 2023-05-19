import React, { Component } from 'react';
import api from '../services/api';
import { Title, Bioperfil,Retangulo, Coluna, Imagem, StatusIndicator, Texto } from './styles';
import {  ActivityIndicator } from 'react-native';
import axios from 'axios';

export default class Card extends Component {
  state = {
    card: {},
    loading: true
  };

  async componentDidMount() {
    const { route } = this.props;

   
    const id = route.params.route.id;
    // Fazer a chamada à API para buscar os detalhes do card
    try {
      const response = await api.get(`/api/character/${id}`);
      let pathEpisode = response.data.episode[0];
      const responseEpisode = await axios.get(pathEpisode)
    
      
      let episodio = responseEpisode.data.name;

      const cardData = {
        id: response.data.id,
        name: response.data.name,
        status: response.data.status,
        species: response.data.species,
        gender: response.data.gender,
        image : response.data.image,        
        location: response.data.location.name,
        episode:  episodio
      };
      
      
       
      this.setState({ card: cardData, loading: false });
    }
    catch (error) {
      console.log(error);
    }
  }

  render() {
    const { card, loading } = this.state;

    if (loading) {
      return <ActivityIndicator />;
    }

    return (
      <Retangulo>
      <Coluna>
        <Imagem source={{ uri: card.image }} />
      </Coluna>
      <Coluna>
          <Title>{card.name}</Title>
          <StatusIndicator text={card.status} specie={card.species} />
          <Bioperfil>{`Last kwown location:`}</Bioperfil>
          <Texto> {card.location}</Texto>
          <Bioperfil>{`First seen in:`}</Bioperfil>
          <Texto> {card.episode}</Texto>
      </Coluna>
    </Retangulo>
    );
  }
}

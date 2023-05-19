import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor:'#999'
})`
    flex: 1;
    height: 40px;
    background: #eee;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #3498db;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
    opacity: ${props => props.loading ? 0.7 : 1};
`;

export const List = styled.FlatList`
    margin-top: 20px;
`;

export const User = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background: #eee;
`;

export const Name = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top: 4px;
    text-align: center;
`;

export const ProfileButton = styled(RectButton)`
    margin-top: 10px;
    align-self: stretch;
    border-radius: 5px;
    background: #3498db;
    justify-content: center;
    align-items: center;
    height: 36px;
`;

export const ProfileButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
`;

export const Title = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
`;


export const Bioperfil = styled.Text`
    font-size: 12px;
    line-height: 18px;
    color: #999;
    margin-top: 5px;
    text-align: center;
`;

export const Retangulo = styled.View`
  background-color: #000;
  flex-direction: row;
  padding: 10px;
`;

export const Coluna = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Imagem = styled.Image`
  width: 150px;
  height: 150px;
`;

export const Texto = styled.Text`
    font-size: 12px;
    line-height: 18px;
    color: #FFF;
    margin-top: 5px;
    text-align: left;
`;

const Circle = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 5px;
  background-color: ${props => props.color};
`;

const TextColumn = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ContainerStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StatusIndicator = ({ text, specie }) => {
  const color = text === 'Alive' ? 'green' : 'red';
  const especie = specie
  return (
    <ContainerStatus>
      <Circle color={color} />
      <TextColumn>
        <Texto>  </Texto>
        <Texto>{text}</Texto>
        <Texto> - </Texto>
        <Texto>{especie}</Texto>
      </TextColumn>
    </ContainerStatus>
  );
};


import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Image,
  ContentCard,
  HorizontalOrientation,
  Title,
  Date,
  Location,
  Organizer,
  ButtunSubcription,
} from './styles';

export default function MeetupCard() {
  return (
    <Container>
      <Image
        source={{
          uri:
            'http://10.0.2.2:3333/files/7b7fb22d2cfae6d403563aa05a7c4a7e.jpg',
        }}
      />
      <ContentCard>
        <Title>Encontro Beneficente</Title>
        <HorizontalOrientation>
          <Icon name="event" size={20} color="#999999" />
          <Date>25 de Agosto, Às 20h</Date>
        </HorizontalOrientation>
        <HorizontalOrientation>
          <Icon name="location-on" size={20} color="#999999" />
          <Location>Rua Fernando Augustinho</Location>
        </HorizontalOrientation>
        <HorizontalOrientation>
          <Icon name="person" size={20} color="#999999" />
          <Organizer>Organizador: Jordan Oliveira</Organizer>
        </HorizontalOrientation>
        <ButtunSubcription onPress={() => {}}>
          Realizar inscrição
        </ButtunSubcription>
      </ContentCard>
    </Container>
  );
}

import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import MeetupCard from '~/components/MeetupCard';
import Header from '~/components/Header';
import { Container } from './styles';

export default function Subscription() {
  return (
    <>
      <Header />
      <Container>
        <MeetupCard />
      </Container>
    </>
  );
}

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

import React from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import MeetupCard from '~/components/MeetupCard';
import { Container } from './styles';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <MeetupCard />
      </Container>
    </>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

import React from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
// import { Container } from './styles';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Text>Dashboard</Text>
    </>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

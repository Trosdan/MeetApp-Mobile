import React from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
// import { Container } from './styles';

export default function Subscription() {
  return (
    <>
      <Header />
      <Text>Subscriotion</Text>
    </>
  );
}

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

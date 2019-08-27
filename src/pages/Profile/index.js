import React from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
// import { Container } from './styles';

export default function Profile() {
  return (
    <>
      <Header />
      <Text>Profile</Text>
    </>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};

import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/img/logo.png';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Image source={logo} style={{ height: 24, width: 24 }} />
    </Container>
  );
}

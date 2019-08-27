import React, { useRef, useState } from 'react';
import { Image } from 'react-native';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

import logo from '~/assets/img/logo.png';

export default function SignIn({ navigation }) {
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlerSubmit() {}

  return (
    <Container>
      <Image source={logo} />
      <Form>
        <FormInput
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />
        <FormInput
          secureTextEntry
          placeholder="Sua senha secreta"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handlerSubmit}
          value={password}
          onChangeText={setPassword}
        />
        <SubmitButton loading={false} onPress={handlerSubmit}>
          Entrar
        </SubmitButton>
      </Form>
      <SignLink onPress={() => navigation.navigate('SignUp')}>
        <SignLinkText>Criar conta gratuita</SignLinkText>
      </SignLink>
    </Container>
  );
}

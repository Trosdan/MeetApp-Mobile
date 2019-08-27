import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image } from 'react-native';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

import { signUpRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/img/logo.png';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlerSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Container>
      <Image source={logo} />
      <Form>
        <FormInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome completo"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          value={name}
          onChangeText={setName}
        />
        <FormInput
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          ref={emailRef}
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
          Criar conta
        </SubmitButton>
      </Form>

      <SignLink onPress={() => navigation.navigate('SignIn')}>
        <SignLinkText>Já tenho conta</SignLinkText>
      </SignLink>
    </Container>
  );
}

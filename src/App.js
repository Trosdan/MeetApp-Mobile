import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';

import { setNavigator } from './services/NavigationService';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);

  return <Routes ref={setNavigator} />;
}

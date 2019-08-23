import React from 'react';

import createRoutes from './routes';
import Background from './components/Background';

export default function App() {
  const Routes = createRoutes();

  return (
    <Background>
      <Routes />
    </Background>
  );
}

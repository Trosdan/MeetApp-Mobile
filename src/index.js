import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import { store, persistor } from './store';

import { setNavigator } from './services/NavigationService';
import createRoutes from './routes';
import Background from './components/Background';

export default function App() {
  const Routes = createRoutes();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Background>
          <Routes ref={setNavigator} />
        </Background>
      </PersistGate>
    </Provider>
  );
}

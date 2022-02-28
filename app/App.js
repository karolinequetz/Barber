import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';

import UserContextProvider from './src/contexts/UserContext'; // engloba todo o app, significa que as informações do usuário vão estar em todos os lugares do apa

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigation/routes';

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RotasTelas from './Atividade5/src/componentes/Routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <RotasTelas></RotasTelas>
    </SafeAreaProvider>
  );
  }
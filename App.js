import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './componentes/Cabecalho';
import Corpo from './componentes/Corpo';
import Disciplina from './componentes/Disciplina';

export default function App() {
  return (
    <View>
      <Cabecalho nome="João" curso="Design"></Cabecalho>

      <Corpo></Corpo>

      <Disciplina disciplina="PIDM"></Disciplina>

      <Disciplina disciplina="CDP"></Disciplina>

    </View>
  );
}
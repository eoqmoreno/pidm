import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Cabecalho from './Atividade1/Cabecalho';
import Corpo from './Atividade1/Corpo';
import Disciplina from './Atividade1/Disciplina';
import {style} from './Atividade1/css/index'

export default function App() {
  return (
    <View style={style.body}>
      <StatusBar backgroundColor={"#381859"}></StatusBar>

      <Cabecalho nome="João Bidu" curso="Design Digital"></Cabecalho>

      <Corpo></Corpo>

      <Disciplina disciplina="PIDM"></Disciplina>

      <Disciplina disciplina="CDP"></Disciplina>

    </View>
  );
}
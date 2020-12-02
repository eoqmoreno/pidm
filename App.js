import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Cabecalho from './componentes/Cabecalho';
import Corpo from './componentes/Corpo';
import Disciplina from './componentes/Disciplina';
import {style} from './componentes/css/index'

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
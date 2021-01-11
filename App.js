import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import IMCApp from './Atividade3/IMCApp';

export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor={"#381859"}></StatusBar>
      <IMCApp></IMCApp>
    </View>
  );
  }
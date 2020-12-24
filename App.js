import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import IMCApp from './Atividade3/IMCApp';
import { styles } from './Atividade3/style/index'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#381859"}></StatusBar>
      <IMCApp></IMCApp>
    </View>
  );
}
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Topo from './componentes/Topo.js'
import Detalhes from './componentes/Detalhes.js'

export default function Cesta({ topo, detalhes }) {
  return <>
    <Topo {...topo} />
    <View style={estilos.cesta}>
      <Detalhes {...detalhes} />
    </View>
  </>
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
})
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ConversionResultScreen({ route }) {
  const { valorOriginal, moedaOriginal, moedaDestino, resultadoConversao } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado da Conversão</Text>
      <Text style={styles.resultText}>
        {valorOriginal} {moedaOriginal} é igual a:
      </Text>
      <Text style={styles.resultValue}>{resultadoConversao} {moedaDestino}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 10,
  },
  resultValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ConversionResultScreen;
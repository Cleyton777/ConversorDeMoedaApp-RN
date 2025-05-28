import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const taxasDeCambioEstaticas = {
  BRL: { USD: 0.20, EUR: 0.18, JPY: 25.00, BRL: 1 },
  USD: { BRL: 5.00, EUR: 0.90, JPY: 125.00, USD: 1 },
  EUR: { BRL: 5.56, USD: 1.11, JPY: 138.89, EUR: 1 },
  JPY: { BRL: 0.040, USD: 0.0080, EUR: 0.0072, JPY: 1 },
};

function converterMoedaEstatico(valor, moedaOrigem, moedaDestino) {
  if (taxasDeCambioEstaticas[moedaOrigem] && taxasDeCambioEstaticas[moedaOrigem][moedaDestino]) {
    return valor * taxasDeCambioEstaticas[moedaOrigem][moedaDestino];
  } else {
    return 'Taxa de câmbio não encontrada.';
  }
}

function ConverterScreen() {
  const [valor, setValor] = useState('');
  const [moedaOrigem, setMoedaOrigem] = useState('BRL');
  const [moedaDestino, setMoedaDestino] = useState('USD');
  const navigation = useNavigation();
  const moedas = Object.keys(taxasDeCambioEstaticas);

  const handleConverter = () => {
    const valorNumerico = parseFloat(valor);
    if (!isNaN(valorNumerico)) {
      const resultado = converterMoedaEstatico(valorNumerico, moedaOrigem, moedaDestino);
      navigation.navigate('ConversionResult', {
        valorOriginal: valorNumerico,
        moedaOriginal: moedaOrigem,
        moedaDestino: moedaDestino,
        resultadoConversao: resultado,
      });
    } else {
      alert('Por favor, insira um valor numérico.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the value"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />
      <Picker
        selectedValue={moedaOrigem}
        onValueChange={(itemValue) => setMoedaOrigem(itemValue)}
      >
        {moedas.map((moeda) => (
          <Picker.Item key={moeda} label={moeda} value={moeda} />
        ))}
      </Picker>
      <Picker
        selectedValue={moedaDestino}
        onValueChange={(itemValue) => setMoedaDestino(itemValue)}
      >
        {moedas.map((moeda) => (
          <Picker.Item key={moeda} label={moeda} value={moeda} />
        ))}
      </Picker>
      <Button title="Converter" onPress={handleConverter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'skyblue',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: '25%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
});

export default ConverterScreen;
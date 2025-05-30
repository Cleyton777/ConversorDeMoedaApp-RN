import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet, SafeAreaView } from 'react-native'; // Adicionado SafeAreaView
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
    return 'Taxa de câmbio não encontrada.'; // Melhorar o tratamento de erro aqui
  }
}

function ConverterScreen() {
  const [valor, setValor] = useState('');
  const [moedaOrigem, setMoedaOrigem] = useState('BRL');
  const [moedaDestino, setMoedaDestino] = useState('USD');
  const navigation = useNavigation();
  const moedas = Object.keys(taxasDeCambioEstaticas);

  const handleConverter = () => {
    const valorNumerico = parseFloat(valor.replace(',', '.')); // Garante que vírgulas funcionem para decimais
    if (!isNaN(valorNumerico)) {
      const resultado = converterMoedaEstatico(valorNumerico, moedaOrigem, moedaDestino);
      if (typeof resultado === 'string') { // Trata o erro da taxa de câmbio não encontrada
        alert(resultado);
        return;
      }
      navigation.navigate('ConversionResult', {
        valorOriginal: valorNumerico,
        moedaOriginal: moedaOrigem,
        moedaDestino: moedaDestino,
        resultadoConversao: resultado.toFixed(2), // Limita para 2 casas decimais
      });
    } else {
      alert('Por favor, insira um valor numérico válido.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}> {/* Usa SafeAreaView para evitar barras do sistema */}
      <View style={styles.container}>
        <Text style={styles.title}>Conversor de Moedas</Text>

        <TextInput
          style={styles.input}
          placeholder="Valor a converter"
          keyboardType="numeric"
          value={valor}
          onChangeText={setValor}
          placeholderTextColor="#999"
        />

        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>De:</Text>
          <Picker
            selectedValue={moedaOrigem}
            onValueChange={(itemValue) => setMoedaOrigem(itemValue)}
            style={styles.picker}
            itemStyle={styles.pickerItem}
          >
            {moedas.map((moeda) => (
              <Picker.Item key={moeda} label={moeda} value={moeda} />
            ))}
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Para:</Text>
          <Picker
            selectedValue={moedaDestino}
            onValueChange={(itemValue) => setMoedaDestino(itemValue)}
            style={styles.picker}
            itemStyle={styles.pickerItem}
          >
            {moedas.map((moeda) => (
              <Picker.Item key={moeda} label={moeda} value={moeda} />
            ))}
          </Picker>
        </View>

        <Button title="Converter" onPress={handleConverter} color="#007AFF" /> {/* Cor do botão */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F2F5', // Um cinza bem claro para o fundo
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center', // Centraliza itens horizontalmente
    justifyContent: 'center', // Centraliza itens verticalmente
  },
  title: {
    fontSize: 28, // Título maior
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40, // Mais espaço abaixo do título
  },
  input: {
    width: '80%', // Um pouco mais largo
    height: 55, // Mais alto
    paddingHorizontal: 15,
    marginBottom: 25, // Mais espaço abaixo
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10, // Bordas mais arredondadas
    fontSize: 22, // Texto maior
    textAlign: 'center', // Centraliza o texto
    backgroundColor: '#FFF', // Fundo branco para o input
    shadowColor: '#000', // Sombra leve
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // Sombra para Android
  },
  pickerContainer: {
    flexDirection: 'row', // Alinha label e picker lado a lado
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    paddingHorizontal: 10, // Espaçamento interno
  },
  pickerLabel: {
    fontSize: 18,
    color: '#555',
    marginRight: 10,
    fontWeight: '600',
  },
  picker: {
    flex: 1, // Ocupa o espaço restante
    height: 50,
    color: '#333',
  },
  pickerItem: {
    fontSize: 18,
    height: 50, // Garante que o texto dentro do Picker tenha altura adequada
  },
});

export default ConverterScreen;
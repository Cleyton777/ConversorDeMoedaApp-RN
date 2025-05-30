import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'; // Adicionado SafeAreaView, TouchableOpacity
import { useNavigation } from '@react-navigation/native'; // Para o botão de voltar ou nova conversão

function ConversionResultScreen({ route }) {
  const { valorOriginal, moedaOriginal, moedaDestino, resultadoConversao } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Conversão Realizada!</Text>

        <View style={styles.resultBox}>
          <Text style={styles.originalAmount}>
            {valorOriginal} <Text style={styles.currencyCode}>{moedaOriginal}</Text>
          </Text>
          <Text style={styles.equalsSign}>=</Text>
          <Text style={styles.convertedAmount}>
            {resultadoConversao} <Text style={styles.currencyCode}>{moedaDestino}</Text>
          </Text>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Converter')} // Volta para a tela de conversão
        >
          <Text style={styles.backButtonText}>Nova Conversão</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F2F5', // Mesmo fundo claro
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 50, // Mais espaço
  },
  resultBox: {
    backgroundColor: '#FFF',
    borderRadius: 15, // Mais arredondado
    padding: 30,
    width: '90%', // Mais largo
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 50,
  },
  originalAmount: {
    fontSize: 24,
    color: '#666',
    marginBottom: 10,
    fontWeight: '500',
  },
  equalsSign: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#555',
    marginVertical: 10,
  },
  convertedAmount: {
    fontSize: 38, // Resultado bem grande
    fontWeight: 'bold',
    color: '#007AFF', // Cor de destaque para o resultado
  },
  currencyCode: {
    fontSize: 18, // Tamanho menor para o código da moeda
    fontWeight: 'normal',
    color: '#888',
  },
  backButton: {
    backgroundColor: '#28A745', // Um verde para "Nova Conversão"
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ConversionResultScreen;
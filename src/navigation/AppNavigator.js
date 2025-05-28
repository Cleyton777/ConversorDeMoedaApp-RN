import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import ConverterScreen from '../screens/ConverterScreen';
import ConversionResultScreen from '../screens/ConversionResultScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Converter" component={ConverterScreen} options={{ title: 'Converter Moedas' }} />
        <Stack.Screen name="ConversionResult" component={ConversionResultScreen} options={{ title: 'Resultado' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
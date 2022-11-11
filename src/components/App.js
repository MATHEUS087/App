import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'


import registro from './registro';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();



function T1({props, navigation, route}) {

  return (
//navigation.navigate('segundaTela', {})
//navigation.pop()
    <View style={styles.container}>
      <Text style={styles.login}>
        LOGIN
      </Text>

      <TextInput
       style={styles.input}
        placeholder='Digite seu nome'
      />

      <TextInput
        style={styles.input}
        placeholder='Digite sua matricula'
      />
      
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder='Digite sua senha'
      />
      <TouchableOpacity
        style={styles.botao}
      >
        <Text style={styles.botaoText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.cadastro}>
        Não se cadastrou?
      </Text>
      <TouchableOpacity
        style={styles.cadastro1}
        onPress={  () => {navigation.navigate('registro' , {})}  }
      >
        <Text style={styles.cadastroText1}>Cadastre-se!</Text>
      </TouchableOpacity>

    </View>
  );
}


export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='telaInicial' component={T1}   />
        <Stack.Screen name='registro' component={registro}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
};




const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ccc',
    alignItems:'center'
  },
  login:{
    marginRight: 220,
    marginVertical: 40,
    fontWeight: 'bold',
    fontSize: 25
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3
  },
  botao:{
    width: 300,
    height: 42,
    backgroundColor: '#ffa500',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  tela: {
    flex: 1
  }
})
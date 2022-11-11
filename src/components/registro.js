import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'

export default class registro extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.registro}>
                    REGISTRO
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Nome completo'
                />
                
                <TextInput
                    style={styles.input}
                    placeholder='Matrícula'
                />
                
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                />
                
                <TextInput
                    style={styles.input}
                    placeholder='Confirme senha'
                />

                <TouchableOpacity 
                style={styles.botao}>
                    <Text style={styles.botaoText}>
                        REGISTRAR
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ccc',
        alignItems: 'center'
    },
    registro: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginEnd: 200,
        marginTop: -100,
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
})
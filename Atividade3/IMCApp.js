import React, { Component } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import IMCCalc from './IMCCalc';
import {style} from './style/';

export class IMCApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pesoEstado: 0,
            alturaEstado: 0.0,
            pesoChange: 0,
            alturaChange: 0.0,
        }
    }

    mudarPeso(peso) {
        this.setState({ pesoChange: peso });
    }

    mudarAltura(altura) {
        this.setState({ alturaChange: altura });
    }

    calcular(){
        this.setState({
            alturaEstado: this.state.alturaChange,
            pesoEstado: this.state.pesoChange,
        })
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.text}>
                    Calculadora de IMC
                </Text>

                <TextInput placeholder="Altura (M)" style={style.input}
                    onChangeText={(altura) => this.mudarAltura(altura)}>
                </TextInput>

                <TextInput placeholder="Peso (Kg)" style={style.input}
                    onChangeText={(peso) => this.mudarPeso(peso)}>
                </TextInput>

                <Button title="Calcular" onPress={()=>this.calcular()} style={style.button}>
                </Button>

                <IMCCalc peso={this.state.pesoEstado} altura={this.state.alturaEstado}></IMCCalc>
            </View>
        )
    }
}

export default IMCApp
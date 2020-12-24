import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import IMCCalc from './IMCCalc';
import { styles } from './style/index'

export class IMCApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peso: null,
            altura: null,
            pesoFinal: null,
            alturaFinal: null,
        }
    }

    calcular = () => {
        this.setState({
            pesoFinal: this.state.peso,
            alturaFinal: this.state.altura,
        })
    }

    render() {
        return (
            <View>
                <TextInput placeholder="Altura (m)" style={styles.text}
                    onChangeText={
                        // (altura) => { altura = altura; console.log(altura)}
                        (altura) => { this.setState({ altura }) }
                    }></TextInput>
                <TextInput placeholder="Peso (kg)" style={styles.text}
                    onChangeText={
                        (peso) => { this.setState({ peso }) }
                    }></TextInput>
                <Button title="Calcular" onPress={() => {
                    this.calcular()
                }}></Button>

                <Text>
                    <IMCCalc altura={this.state.alturaFinal} peso={this.state.pesoFinal}></IMCCalc>
                </Text>
            </View>
        )
    }
}

export default IMCApp

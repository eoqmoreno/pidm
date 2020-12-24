import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { styles } from './style/index'

export class IMCMsg extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let msg = "";
        let style = "";
        if (this.props.imc < 17 && this.props.imc > 0) {
            msg = "Muito abaixo do peso"
            style = <Text style={styles.diferente}>{msg}</Text>
        } else if (this.props.imc >= 17 && this.props.imc <= 18.49) {
            msg = "Abaixo do peso"
            style = <Text style={styles.diferente}>{msg}</Text>
        } else if (this.props.imc >= 18.5 && this.props.imc <= 24.99) {
            msg = "Peso normal"
            style = <Text style={styles.normal}>{msg}</Text>
        } else if (this.props.imc >= 25 && this.props.imc <= 29.99) {
            msg = "Acima do peso"
            style = <Text style={styles.diferente}>{msg}</Text>
        } else if (this.props.imc >= 30 && this.props.imc <= 34.99) {
            msg = "Obesidade 1"
            style = <Text style={styles.diferente}>{msg}</Text>
        } else if (this.props.imc >= 35 && this.props.imc <= 39.99) {
            msg = "Obesidade 2 (severa)"
            style = <Text style={styles.diferente}>{msg}</Text>
        } else if (this.props.imc >= 40 && this.props.imc > 0) {
            msg = "Obesidade 3 (mórbida)"
            style = <Text style={styles.diferente}>{msg}</Text>
        }
        
        return (
            <View>
                <Text>
                    {style}
                </Text>
            </View>
        )
    }
}

export default IMCMsg

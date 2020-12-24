import React, { Component } from 'react'
import { Text, View } from 'react-native'
import IMCMsg from './IMCMsg';
import { styles } from './style/index'

export class IMCCalc extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        let imc = ""
        if (this.props.altura != null && this.props.peso != null) {
            imc = Number(this.props.peso / (this.props.altura * this.props.altura)).toFixed(2)
        }

        return (
            <View>
                <Text style={styles.negrito}>
                    {imc}
                </Text>
                <IMCMsg imc={imc}></IMCMsg>
            </View>
        )
    }
}

export default IMCCalc

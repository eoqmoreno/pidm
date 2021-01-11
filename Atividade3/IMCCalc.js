import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IMCMsg from './IMCMsg'
import {style} from './style/';

export class IMCCalc extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let imc = ""
        if(this.props.peso){
            imc = this.props.peso/(this.props.altura*this.props.altura) 
        }
        return (
            <View>
                <Text style={style.text}>
                    Seu IMC é: {imc}
                </Text>
                <IMCMsg imc={imc}></IMCMsg>
            </View>
        )
    }
}

export default IMCCalc

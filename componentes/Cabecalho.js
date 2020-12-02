import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { style } from '../componentes/css/index'

export class Cabecalho extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let image = {
            uri: "https://media4.giphy.com/media/2UxWBIttMvvIJ55hTe/200.gif",
        }

        return (
            <ImageBackground source={image} style={style.container, style.navbar}>
                <Text style={style.bold}>
                    {this.props.nome}
                </Text>
                <Text style={style.curso}>
                    {this.props.curso}
                </Text>
            </ImageBackground>
        )
    }
}

export default Cabecalho

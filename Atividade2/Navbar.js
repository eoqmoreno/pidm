import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { style } from './style'

export class Navbar extends Component {
    render() {
        return (
            <View style={style.navbar}>
                <Text style={style.navbarText}>
                    Votação de Cidades
                </Text>
            </View>
        )
    }
}

export default Navbar

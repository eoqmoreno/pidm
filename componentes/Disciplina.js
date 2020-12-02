import React, { Component } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { style } from '../componentes/css/index'

export class Disciplina extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text style={style.disciplina} >
                    {this.props.disciplina}
                </Text>
            </View>
        )
    }
}

export default Disciplina

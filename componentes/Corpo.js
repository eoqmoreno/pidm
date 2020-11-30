import React, { Component } from 'react'
import { Image, View } from 'react-native'

export class Corpo extends Component {
    render() {
        let foto = {
            uri: "https://i.pinimg.com/280x280_RS/01/4e/14/014e144ab4dcf653391380fa5e469bd7.jpg"
        }
        return (
            <Image source={foto} style={{width: 400, height: 400}} />
        )
    }
}

export default Corpo

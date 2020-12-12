import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { style } from './style/index'
import Navbar from './Navbar';

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cidades: [
                { cidade: "Quixadá", valor: 0 },
                { cidade: "Fortaleza", valor: 0 },
                { cidade: "Ibaretama", valor: 0 },

            ],
        }
    }

    somar(index, valor) {
        let array = [...this.state.cidades]
        array[index].valor = array[index].valor + 1;
        this.setState({
            cidades: array,
        })
    }

    render() {
        let cidades = [];
        let botoes = [];
        let maior = Math.max.apply(null, this.state.cidades.map((busca) => (busca.valor)))
        let menor = Math.min.apply(null, this.state.cidades.map((busca) => (busca.valor)))
        let maisVotada = [];
        let menosVotada = [];

        this.state.cidades.map((busca, index) => {
            cidades.push(<Text key={index} style={style.cidade}>{busca.cidade}: {busca.valor}</Text>)
            botoes.push(<Button key={index} color="#381859" title={"+ " + busca.cidade} onPress={(() => { this.somar(index, busca.valor) })}></Button>)
        })

        this.state.cidades.map((busca, index) => {
            if (busca.valor == maior && maior > 0) {
                maisVotada.push(busca.cidade)
            }
            if (busca.valor == menor && menor != maior) {
                menosVotada.push(busca.cidade)
            }
        })

        return (
            <View>
                <Navbar></Navbar>

                <View style={style.margin}>
                    <View style={style.row}>
                        {cidades}
                    </View>

                    <View style={style.row}>
                        {botoes}
                    </View>
                </View>

                <Text>
                    Mais votada(s):
                    {maisVotada}
                </Text>

                <Text>
                    Menos votada(s):
                    {menosVotada}
                </Text>
            </View>
        )
    }
}

export default Home

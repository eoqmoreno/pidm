import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flexWrap: "wrap",
        alignContent: "center",
    },

    navbar: {
        backgroundColor: "#070836",
        alignItems: "center",
        padding: 20,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
    },

    bold: {
        fontWeight: "bold",
        color: "#dabe5d",
        fontSize: 30,
    },

    curso: {
      color: "white",  
    },

    foto: {
        borderRadius: "100%",
        width: 200,
        height: 200,
        margin: 20,
        borderWidth: 3,
        borderColor: "#dabe5d",
    },

    disciplina: {
        backgroundColor: "#d3cb3b",
        margin: 10,
        fontSize: 20,
        padding: 10,
        textAlign: "center",
        borderRadius: 10,
        color: "white"
    },

    body: {
        flex: 1,
    }
})

export {style}
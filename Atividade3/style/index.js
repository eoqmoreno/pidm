import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#e5e5e5",
    },
    input: {
        height: 45,
        width: "95%",
        borderColor: "gray",
        borderWidth: 2,
        paddingLeft:20,
    },
    button: {
        width:"93%",
        margin: 15,
        backgroundColor: "red"
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },
    situacao: {
        color: "red",
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },
    normal: {
        color: "blue",
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    }
})

export {style}
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginBottom: 10,
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    negrito: {
        fontWeight: "bold",
        fontSize: 25,
    },
    normal: {
        fontWeight: "bold",
        fontSize: 25,
        color: "blue",
    },
    diferente: {
        fontWeight: "bold",
        fontSize: 25,
        color: "red",
    }
})

export { styles }
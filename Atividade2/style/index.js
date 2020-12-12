import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
    },

    navbar: {
        backgroundColor: "orange",
        alignItems: "center",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 50,
        justifyContent: "center",
    },

    navbarText: {
        fontWeight: "bold",
        fontSize: 25,
        color: "white",
    },

    cidade: {
        fontSize: 15,
    },
    
    margin:{
        marginTop:20,
        marginBottom: 20,
    }
})

export { style };
import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainHeaderContainer: {
         backgroundColor: "#2f3030",
         height: 100,
         paddingTop: 55,
         alignItems: "center",
    },
    mainHeaderText: {
        fontFamily: "Rockwell",
        color: "#fff",
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold",
        paddingTop: 10,
        textShadowColor: "#2bad4e",
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    },
    playerBox: {
        backgroundColor: "#2bad4e",
        marginVertical: 0,
        marginTop: 0,
        justifyContent: "space-between",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        borderStyle: "dashed",
        borderWidth: .5,
        borderColor: "#2f3030",
    },
    playerText: {
        color: "#fff",
        fontWeight: "bold",
        paddingTop: 10,
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,

},
    playerScoreText: {
        color: "#fff",
        fontWeight: "bold",
        padding: 10,
        fontSize: 45,
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
});

export default styles;
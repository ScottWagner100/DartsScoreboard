import React from "react";
import styles from "../globalStyles";
import {Text, View} from "react-native";


export default function MainHeader() {

    return (
        <View style={styles.mainHeaderContainer}>
            <Text style={styles.mainHeaderText}>Darts Scoreboard</Text>
        </View>


    ) // return

} // MainHeader
import React from "react";
import styles from "../globalStyles";
import {Text, View} from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function MainHeader() {

    return (
            <View style={styles.mainHeaderContainer}>
            <Text style={styles.mainHeaderText}>Darts Scoreboard</Text>
                <Ionicons
                    name="ios-menu"
                    size={34}
                    color="black"
                    style={styles.headerMenuIcon}
                    onPress={() => {
                        console.log("Menu Pressed")
                    }}
                />
        </View>


    ) // return

} // MainHeader
import React, {useState} from "react";
import {
    Text,
    TouchableHighlight,
    View,
} from "react-native";
import styles from "../globalStyles";
import { Ionicons, Feather } from '@expo/vector-icons';

export default function PlayerScore({playerNumber, score, setScore}) {

    return (
            <View style={styles.playerBox}>
                <View style={styles.playerNameBox}>
                <Text style={styles.playerText}>{playerNumber}</Text>
                </View>
                <Text style={styles.playerScoreText}>{score}</Text>
                <View>
                    <TouchableHighlight>
                    <Ionicons name="add-circle-outline"
                              style={styles.playerBoxAdd}
                              size={24}
                              color="black"
                              onPress={() => {
                                  setScore(score - 15);
                    }} />
                    </TouchableHighlight>
                </View>
            </View>
    ) // return
} // PlayerScore
import React, {useState} from "react";
import {Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";
import styles from "../globalStyles";
import { Ionicons, Feather } from '@expo/vector-icons';

export default function PlayerScore({playerNumber}) {

    const [score, setScore] = useState(501);

    return (
        <View style={styles.playerBox}>
            <View style={styles.playerNameBox}>
            <Text style={styles.playerText}>Player {playerNumber}</Text>
            <Feather
                name="edit-2"
                size={10}
                style={styles.playerNameEdit}
            />
            </View>
            <Text style={styles.playerScoreText}>{score}</Text>
            <View style={styles.playerBoxButton}>
                <TouchableHighlight>
                <Ionicons name="add-circle-outline"
                          style={styles.playerBoxAdd}
                          size={24}
                          color="black"
                          onPress={() => {
                    setScore(score - 5);
                }} />
                </TouchableHighlight>
            </View>
        </View>
    ) // return
} // PlayerScore
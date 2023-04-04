import React, {useState} from "react";
import {Button, Text, View} from "react-native";
import styles from "../globalStyles";

export default function PlayerScore({playerNumber}) {

    const [score, setScore] = useState(501);

    return (
        <View style={styles.playerBox}>
            <Text style={styles.playerText}>Player {playerNumber}</Text>
            <Text style={styles.playerScoreText}>{score}</Text>
            <Button title={"Button"} onPress={() => {
                setScore(score - 5);
            }} />
        </View>
    ) // return
} // PlayerScore
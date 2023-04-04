import React, {useState} from "react";
import {Modal, View, Alert, Text} from "react-native";
import PlayerScore from "./PlayerScore";
import styles from "../globalStyles";


export default function MainBody() {

    const [playerName, setPlayerName] = useState([
        {name: "Player 1", key: "1"},
        {name: "Player 2", key: "2"},
    ]);

    const [playerOneScore, playerOneSetScore] = useState(501);
    const [playerTwoScore, playerTwoSetScore] = useState(501);

    return (
        <View>
            <PlayerScore
                playerNumber={playerName[0].name}
                score={playerOneScore}
                setScore={playerOneSetScore}
            />
            <PlayerScore
                playerNumber={playerName[1].name}
                score={playerTwoScore}
                setScore={playerTwoSetScore}
            />
        </View>
    ) // return
} // MainBody
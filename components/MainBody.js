import React, {useState} from "react";
import {View} from "react-native";
import PlayerScore from "./PlayerScore";

export default function MainBody() {

    const [playerNum, setPlayerNum] = useState([
        {number: "1", key: "1"},
        {number: "2", key: "2"},
    ]);

    return (
        <View>
            <PlayerScore playerNumber={1} />
            <PlayerScore playerNumber={2}/>
        </View>
    ) // return
} // MainBody
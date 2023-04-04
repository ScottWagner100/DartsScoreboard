import React, {useState} from "react";
import {View} from "react-native";
import PlayerScore from "./PlayerScore";

export default function MainBody() {

    return (
        <View>
            <PlayerScore playerNumber={1} />
            <PlayerScore playerNumber={2}/>
        </View>
    ) // return
} // MainBody
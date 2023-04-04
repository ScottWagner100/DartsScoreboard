import React, {useState} from "react";
import {
    Text,
    TouchableHighlight,
    View,
    Modal, TextInput, Button, TouchableOpacity,
} from "react-native";
import styles from "../globalStyles";
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

export default function PlayerScore({playerNumber, score, setScore}) {

    const [modalVisible, setModalVisible] = useState(false);
    const [enteredValue, setEnteredValue] = useState();

    const enterValueHandler = (value) => {
        setEnteredValue(value);
        console.log("Entered Value " + enteredValue);
    } // enteredValueHandler

    const singleHandler = () => {
        setScore(score - enteredValue);
        setModalVisible(false);
    } // singleHandler

    const doubleHandler = () => {
        setScore(score - (enteredValue * 2));
        setModalVisible(false);
    } // doubleHandler

    const tripleHandler = () => {
        setScore(score - (enteredValue * 3));
        setModalVisible(false);
    } // tripleHandler

    const bullseyeHandler = () => {
        setScore(score - 50);
        setModalVisible(false);
    } // bullseyeHandler

    const outerBullseyeHandler = () => {
        setScore(score - 25);
        setModalVisible(false);
    } // outerBullseyeHandler

    return (
        <View>
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
                                setModalVisible(!modalVisible)
                    }} />
                    </TouchableHighlight>
                </View>
            </View>
            <View>
                <Modal
                    visible={modalVisible}
                    transparent={true}
                >
                    <View style={styles.modalScoreBox}>
                        <View style={styles.modalHeaderBox}>
                        <Text style={styles.modalHeader}>{playerNumber}</Text>
                            <AntDesign
                                name="closecircleo"
                                size={24}
                                color="black"
                                style={styles.modalExit}
                                onPress={() => {
                                    setModalVisible(false);
                                    console.log("Modal Exit")
                                }}
                            />
                        </View>
                        <TextInput
                        style={styles.modalTextInput}
                        placeholder={""}
                        keyboardType={"numeric"}
                        onChangeText={enterValueHandler}
                        />
                       <TouchableOpacity
                            onPress={() => {
                                bullseyeHandler();
                            console.log("Bullseye");
                            }}
                       >
                           <Text style={styles.bullseye}>Bullseye</Text>
                       </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                outerBullseyeHandler();
                                console.log("Outer Bullseye");
                            }}
                        >
                            <Text style={styles.bullseye}>Outer Bullseye</Text>
                        </TouchableOpacity>
                        <View style={styles.multiplierBox}>
                        <TouchableOpacity
                            onPress={() => {
                                singleHandler();
                                console.log("Single Selected");
                            }}
                        >
                            <Text style={styles.multiplierButton}>single</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                doubleHandler();
                                console.log("Double Selected");
                            }}
                        >
                            <Text style={styles.multiplierButton}>double</Text>
                        </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    tripleHandler();
                                    console.log("Triple Selected");
                                }}
                            >
                                <Text style={styles.multiplierButton}>triple</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    ) // return
} // PlayerScore
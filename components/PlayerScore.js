import React, {useState} from "react";
import {
    Text,
    TouchableHighlight,
    View,
    Modal, TextInput, Button, TouchableOpacity,
} from "react-native";
import styles from "../globalStyles";
import { Ionicons, Feather } from '@expo/vector-icons';

export default function PlayerScore({playerNumber, score}) {

    const [modalVisible, setModalVisible] = useState(false);

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
                    visible={true}
                    transparent={true}
                >
                    <View style={styles.modalScoreBox}>
                        <Text style={styles.modalHeader}>{playerNumber}</Text>
                        <TextInput
                        style={styles.modalTextInput}
                        placeholder={""}
                        keyboardType={"numeric"}
                        />
                       <TouchableOpacity
                            onPress={() => {
                            console.log("Bullseye");
                            }}
                       >
                           <Text style={styles.bullseye}>Bullseye</Text>
                       </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                console.log("Outer Bullseye");
                            }}
                        >
                            <Text style={styles.bullseye}>Outer Bullseye</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                console.log("Double Selected");
                            }}
                        >
                            <Text style={styles.doubleButton}>Double</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        </View>
    ) // return
} // PlayerScore
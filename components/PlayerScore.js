import React, {useState} from "react";
import {
    Text,
    TouchableHighlight,
    View,
    Modal, TextInput, Button, TouchableOpacity,
} from "react-native";
import styles from "../globalStyles";
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

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
                        <View style={styles.modalHeaderBox}>
                        <Text style={styles.modalHeader}>{playerNumber}</Text>
                            <AntDesign
                                name="closecircleo"
                                size={24}
                                color="black"
                                style={styles.modalExit}
                            />
                        </View>
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
                        <View style={styles.multiplierBox}>
                        <TouchableOpacity
                            onPress={() => {
                                console.log("Single Selected");
                            }}
                        >
                            <Text style={styles.multiplierButton}>single</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                console.log("Double Selected");
                            }}
                        >
                            <Text style={styles.multiplierButton}>double</Text>
                        </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
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
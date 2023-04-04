import React, {useState} from "react";
import {
    Text,
    TouchableHighlight,
    View,
    Modal, TextInput,
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
                        placeholder={"points"}
                        keyboardType={"numeric"}
                        />
                    </View>
                </Modal>
            </View>
        </View>
    ) // return
} // PlayerScore
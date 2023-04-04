import { StatusBar } from 'expo-status-bar';
import {Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from "./globalStyles";

export default function App() {

  const touchDismiss = () => {
    Keyboard.dismiss();
    console.log("keyboard dismissed");
  };

  return (
      <TouchableWithoutFeedback onPress={touchDismiss}>
    <View style={styles.container}>

    </View>
      </TouchableWithoutFeedback>
  );
}


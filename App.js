import { StatusBar } from 'expo-status-bar';
import {Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from "./globalStyles";
import MainHeader from "./components/mainHeader";
import MainBody from "./components/MainBody";

export default function App() {

  const touchDismiss = () => {
    Keyboard.dismiss();
    console.log("keyboard dismissed");
  };

  return (
      <TouchableWithoutFeedback onPress={touchDismiss}>
    <View>
      <View>
        <MainHeader />
      </View>
      <View>
        <MainBody />
      </View>
    </View>
      </TouchableWithoutFeedback>
  );
}


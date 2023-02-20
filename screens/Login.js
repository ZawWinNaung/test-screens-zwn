import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import styles from "../styles/styles";

export default function Login() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.image}
          source={require("../assets/images/uk.png")}
        />
        <Text>Language</Text>
      </View>
      <Text style={styles.title1}>Mobile Payment</Text>
      <Text style={styles.title2}>Login or Register</Text>
      <TextInput
        style={styles.textInput}
        placeholder="09"
        placeholderTextColor={"#888888"}
      />
      <View style={styles.termsContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
          tintColors={{ true: "#0053a7", false: "black" }}
        />
        <Text>
          <Text style={{ color: "#0053a7" }}>I accept Terms of Service</Text>
        </Text>
      </View>
      <View style={styles.buttonView}>
        <Pressable
          style={styles.loginButton}
          android_ripple={{ color: "#368ee6", borderless: true }}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

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
      <Pressable style={{ width: "100%" }} android_ripple="#368ee6">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 16,
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  image: {
    width: 30,
    height: 30,
    marginVertical: 8,
    marginEnd: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#888888",
    backgroundColor: "white",
    color: "#120438",
    borderRadius: 8,
    width: "100%",
    marginRight: 8,
    padding: 8,
  },
  title1: {
    marginVertical: 20,
    fontSize: 28,
    fontWeight: "bold",
  },
  title2: {
    marginVertical: 16,
    fontSize: 20,
    fontWeight: "bold",
  },
  termsContainer: {
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    paddingVertical: 8,
    backgroundColor: "#0053a7",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },
});

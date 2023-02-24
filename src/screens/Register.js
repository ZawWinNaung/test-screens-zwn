import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "../styles/styles";
import { useForm, Controller } from "react-hook-form";
import CustomInput from "../components/CustomInput";
import ModalPopUp from "../components/ModalPopUp";
import { useSelector } from "react-redux";

export default function Register({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [visible, setVisible] = useState(false);

  const onSignInPressed = (data) => {
    setVisible(true);
  };

  const userName = useSelector((state) => state.auth.username);

  return (
    <View style={styles.container}>
      <ModalPopUp visible={visible}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 60, height: 60 }}
            source={require("../../assets/images/checkmark.png")}
          />
          <Text style={{ marginVertical: 16 }}>Successfully Created.</Text>
          <View style={styles.buttonView}>
            <Pressable
              style={styles.loginButton}
              android_ripple={{ color: "#368ee6", borderless: true }}
              onPress={() => {
                setVisible(false);
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.buttonText}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </ModalPopUp>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.image}
          source={require("../../assets/images/uk.png")}
        />
        <Text>Language</Text>
      </View>
      <Text style={styles.title1}>Mobile Payment</Text>
      <Text style={styles.title2}>Register</Text>
      <CustomInput
        name="name"
        placeholder="Name"
        control={control}
        rules={{ required: "Name is required!" }}
      />
      <CustomInput
        name="phone"
        placeholder="09"
        control={control}
        rules={{ required: "Phone is required!" }}
      />
      <CustomInput
        name="passcode"
        placeholder="Passcode"
        control={control}
        rules={{ required: "Passcode is required!" }}
      />
      <CustomInput
        name="confirmPasscode"
        placeholder="Confirm Passcode"
        control={control}
        rules={{ required: "Confirm Passcode is required!" }}
      />
      <View style={styles.buttonView}>
        <Pressable
          style={styles.loginButton}
          android_ripple={{ color: "#368ee6", borderless: true }}
          onPress={handleSubmit(onSignInPressed)}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>
      </View>
      <View style={{ width: "100%", alignItems: "center", marginTop: 24 }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "#0053a7", fontSize: 20 }}>I have account</Text>
        </Pressable>
      </View>
    </View>
  );
}

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import styles from "../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import CustomInput from "../components/CustomInput";
import { addName } from "../redux/counterSlice";
import { colors } from "../styles/colors";

export default function Login({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.username);
  const submitForm = (data) => {
    if (data.phone != userName) {
      dispatch(addName(data.phone));
    }
    navigation.navigate("AppDrawerStack");
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.image}
          source={require("../../assets/images/uk.png")}
        />
        <Text style={{ color: colors.textColor }}>Language</Text>
      </View>
      <Text style={styles.title1}>Mobile Payment</Text>
      <Text style={styles.title2}>Login or Register</Text>
      <CustomInput
        name="phone"
        placeholder="09"
        control={control}
        rules={{ required: "Phone is required!" }}
      />
      <View style={styles.termsContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
          tintColors={{ true: colors.primaryColor, false: "grey" }}
        />
        <Text>
          <Text style={{ color: colors.accentColor }}>
            I accept Terms of Service
          </Text>
        </Text>
      </View>
      <View style={styles.buttonView}>
        <Pressable
          style={styles.loginButton}
          android_ripple={{ color: colors.buttonRippleColor, borderless: true }}
          onPress={handleSubmit(submitForm)}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

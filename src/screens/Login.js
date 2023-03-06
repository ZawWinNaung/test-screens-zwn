import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import styles from "../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import CustomInput from "../components/CustomInput";
import { selectUserName, setSignIn } from "../redux/authSlice";
import { colors } from "../styles/colors";

export default function Login({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const submitForm = (data) => {
    dispatch(
      setSignIn({
        isLoggedIn: true,
        userName: data.phone,
      })
    );
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
      <Text style={styles.title2}>Login</Text>
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

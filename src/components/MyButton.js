import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/colors";
import styles from "../styles/styles";

export const MyButton = (props) => {
  return (
    <View style={[styles.buttonView, { width: props.width }]}>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          onPress;
        }}
        {...props}
      >
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

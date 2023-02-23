import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "../styles/styles";

export const Search = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text>Search</Text>
      </View>
    </View>
  );
};

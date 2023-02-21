import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "../styles/styles";

export const Feed = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text>Feed</Text>
      </View>
    </View>
  );
};

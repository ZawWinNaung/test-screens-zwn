import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import styles from "../styles/styles";

export const Home = () => {
  const userName = useSelector((state) => state.auth.username);
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text>Welcome {userName}</Text>
      </View>
    </View>
  );
};

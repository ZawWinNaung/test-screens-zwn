import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/styles";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Text>Profile</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-outline" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

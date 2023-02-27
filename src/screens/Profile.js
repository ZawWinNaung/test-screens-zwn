import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../styles/colors";
import { useSelector } from "react-redux";

export const Profile = ({ navigation }) => {
  const userName = useSelector((state) => state.auth.username);

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
        <Text style={{ color: colors.textColor }}>{userName}</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

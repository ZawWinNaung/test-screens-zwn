import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import styles from "../styles/styles";

export const Home = () => {
  const userName = useSelector((state) => state.auth.username);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title2}>Welcome {userName}</Text>
      </View>
    </View>
  );
};

import axios from "axios";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";
import styles from "../styles/styles";

export const Search = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://randomuser.me/api/?results=20");
      console.log("response", response.data);
    };
    getData();
  }, []);

  const callAddUserList = () => {
    let params = { userID: 1, name: "User 1" };
    axios
      .post(
        "https://crudcrud.com/api/46ed8ea00fff414e93384fc2eced7a52/users",
        params
      )
      .then((response) => {
        console.log("response", response?.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <SearchBar
          placeholder="Search"
          round
          containerStyle={{
            backgroundColor: "transparent",
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
        />
      </View>
    </View>
  );
};

import {
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import React from "react";
import { Search } from "../screens/Search";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="profile"
      screenOptions={{
        drawerPosition: "right",
      }}
    >
      <Drawer.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

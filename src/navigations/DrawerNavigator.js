import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import React from "react";
import { Search } from "../screens/Search";
import { Profile } from "../screens/Profile";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Settings } from "../screens/Settings";
import { Image, View } from "react-native";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ backgroundColor: "white" }}
    >
      {/* <View
        style={{
          flexDirection: "row",
          padding: 30,
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <Image source={require("../../assets/images/checkmark.png")} />
      </View> */}
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        icon={(props) => (
          <Ionicons
            name="log-out-outline"
            size={props.size}
            color={props.color}
          />
        )}
        onPress={() => alert("Link to help")}
      />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="profile"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: "right",
      }}
    >
      <Drawer.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
          drawerItemStyle: { display: "none" },
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name="settings-outline"
              size={props.size}
              color={props.color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

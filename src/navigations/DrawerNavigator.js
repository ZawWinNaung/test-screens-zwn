import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Settings } from "../screens/Settings";
import { colors } from "../styles/colors";
import { BottomTabNavigator } from "./BottomTabNavigator";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ backgroundColor: colors.appBackgroundColor }}
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
        activeTintColor={colors.primaryColor}
        inactiveTintColor={colors.textColor}
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
        drawerStyle: {
          backgroundColor: colors.appBackgroundColor,
        },
        drawerPosition: "right",
        drawerType: "back",
        drawerInactiveTintColor: colors.textColor,
      }}
    >
      <Drawer.Screen
        name="BottomStack"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          drawerItemStyle: { display: "none" },
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
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

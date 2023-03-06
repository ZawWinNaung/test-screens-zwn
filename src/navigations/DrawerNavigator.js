import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import React, { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import ModalPopUp from "../components/ModalPopUp";
import { MyButton } from "../components/MyButton";
import { setSignOut } from "../redux/authSlice";
import { Settings } from "../screens/Settings";
import { colors } from "../styles/colors";
import styles from "../styles/styles";
import { BottomTabNavigator } from "./BottomTabNavigator";

const CustomDrawerContent = (props) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ backgroundColor: colors.appBackgroundColor }}
    >
      <ModalPopUp visible={visible}>
        <View style={{ alignItems: "center" }}>
          <Ionicons name="log-out-outline" size={60} color={"white"} />
          <Text style={{ marginVertical: 16, color: colors.textColor }}>
            Are you sure want to log out?
          </Text>
          <View
            style={{
              alignSelf: "stretch",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <MyButton
              width="30%"
              text={"Ok"}
              onPress={() => {
                setVisible(false);
                dispatch(setSignOut());
              }}
            />
            <MyButton
              width="30%"
              text={"Cancel"}
              onPress={() => {
                setVisible(false);
              }}
            />
          </View>
        </View>
      </ModalPopUp>
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
        onPress={() => setVisible(true)}
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

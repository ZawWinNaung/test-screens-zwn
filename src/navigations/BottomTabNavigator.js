import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Search } from "../screens/Search";
import { DrawerNavigator } from "./DrawerNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Profile } from "../screens/Profile";
import { Home } from "../screens/Home";
import CustomTabBar from "./CustomTabBar";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 4,
          backgroundColor: "#434343",
          borderRadius: 20,
          height: 70,
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: (props) => {
          let iconName;
          switch (route.name) {
            case "Home": {
              iconName = "planet-outline";
              break;
            }
            case "Search": {
              iconName = "search-outline";
              break;
            }
            case "Profile": {
              iconName = "person-outline";
            }
          }

          return (
            <Ionicons name={iconName} size={props.size} color={props.color} />
          );
        },
        tabBarActiveTintColor: "#129dee",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={DrawerNavigator} />
    </Tab.Navigator>
  );
};

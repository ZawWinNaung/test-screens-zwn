import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { BottomTabNavigator } from "./src/navigations/BottomTabNavigator";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";
import { DrawerNavigator } from "./src/navigations/DrawerNavigator";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

NavigationBar.setBackgroundColorAsync("#292929");

const RootNavigation = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#292929" }}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator>
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AppDrawerStack"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./src/redux/store";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";
import { DrawerNavigator } from "./src/navigations/DrawerNavigator";
import { selectIsLoggedIn, setAuthStatus } from "./src/redux/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

NavigationBar.setBackgroundColorAsync("#292929");

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#292929" }}>
        <StatusBar style="light" />
        <AppRoute />
      </SafeAreaView>
    </Provider>
  );
}

const AppRoute = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // AsyncStorage.getItem("token").then((value) => {
  //   if (value == null) {
  //     dispatch(setAuthStatus(false));
  //   }
  // });

  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AppDrawerStack"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

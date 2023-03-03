import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";
import { DrawerNavigator } from "./src/navigations/DrawerNavigator";

const Stack = createNativeStackNavigator();

NavigationBar.setBackgroundColorAsync("#292929");

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

const RootNavigation = () => {
  const [token, setToken] = useState("12345");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#292929" }}>
      <StatusBar style="light" />
      <NavigationContainer>
        {token ? <HomeStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

const AuthStack = () => {
  return (
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

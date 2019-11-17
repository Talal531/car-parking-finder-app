import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Auth from "../screens/Auth/Auth";
import MapScreen from "../screens/Map";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const MapNavigator = createDrawerNavigator({
  Map: MapScreen,
  Profile: ProfileScreen
});

const AuthNavigator = createStackNavigator(
  {
    AuthScreen: Auth,
    Map: MapNavigator
  },
  {
    initialRouteName: "AuthScreen",
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createSwitchNavigator({
  Auth: AuthNavigator
});

export default createAppContainer(AppContainer);

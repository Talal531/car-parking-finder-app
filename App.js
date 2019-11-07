import React from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import Constants from "expo-constants";
import Map from "./screens/Map";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Map />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  }
});

import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.profileScreenContainer}>
        <Text> ProfileScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

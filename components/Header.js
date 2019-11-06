import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headeText}>Car Parking Finder</Text>
        <Ionicons
          name="ios-add-circle-outline"
          size={26}
          color="#fff"
          style={{ position: "absolute", right: 10 }}
          onPress={() => this.props.setModalVisible(true)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: "#D83C54",
    justifyContent: "center",
    alignItems: "center"
  },
  headeText: {
    color: "#f1f1f1",
    textAlign: "center",
    fontSize: 24,
    margin: 20
  }
});

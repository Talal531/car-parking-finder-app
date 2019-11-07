import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import * as theme from "../theme";

export default class Header extends Component {
  render() {
    return (
      // <View style={styles.header}>
      //   <Text style={styles.headeText}>Car Parking Finder</Text>
      //   <Ionicons
      //     name="ios-add-circle-outline"
      //     size={26}
      //     color="#fff"
      //     style={{ position: "absolute", right: 10 }}
      //     onPress={() => this.props.setModalVisible(true)}
      //   />
      // </View>
      <View style={styles.header}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={styles.headerTitle}>Detected location</Text>
          <View style={styles.headerLocation}>
            <Text style={styles.headerLocationTitle}>Karachi, Pakistan</Text>
            <Ionicons
              name="ios-arrow-down"
              size={theme.SIZES.icon}
              color={theme.COLORS.white}
              style={{ marginTop: theme.SIZES.base / 2 }}
            />
          </View>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
        >
          <TouchableWithoutFeedback>
            <Ionicons
              name="ios-menu"
              size={theme.SIZES.icon * 1.5}
              color={theme.COLORS.white}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // header: {
  //   flex: 0.5,
  //   flexDirection: "row",
  //   backgroundColor: "#D83C54",
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
  // headeText: {
  //   color: "#f1f1f1",
  //   textAlign: "center",
  //   fontSize: 24,
  //   margin: 20
  // },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: theme.COLORS.red,
    paddingHorizontal: theme.SIZES.base * 2,
    paddingTop: theme.SIZES.base * 2.5,
    paddingBottom: theme.SIZES.base * 1.5
  },
  headerTitle: {
    color: theme.COLORS.overlay
  },
  headerLocation: {
    flexDirection: "row"
  },
  headerLocationTitle: {
    fontSize: theme.SIZES.font,
    fontWeight: "500",
    paddingVertical: theme.SIZES.base / 3,
    paddingRight: theme.SIZES.base / 2,
    color: theme.COLORS.white
  }
});

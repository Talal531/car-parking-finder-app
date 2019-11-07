import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from "react-native";

import * as theme from "../../theme";

export default class Auth extends Component {
  render() {
    const {
      heading,
      formContainer,
      textInput,
      buttonStyle,
      errorBtnStyle,
      cancelButtonStyle,
      guestButtonStyle,
      buttonTextStyle,
      guestButtonTextStyle
    } = styles;
    return (
      <KeyboardAvoidingView style={formContainer} behavior="padding" enabled>
        <Text style={heading}>Sign In</Text>
        <TextInput
          placeholder="Email!"
          placeholderTextColor={this.props.error ? "red" : "green"}
          keyboardType="email-address"
          style={[textInput, this.props.error && errorBtnStyle]}
        />
        <TextInput
          placeholder="Password!"
          placeholderTextColor={this.props.error ? "red" : "green"}
          secureTextEntry={true}
          style={[textInput, this.props.error && errorBtnStyle]}
        />
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={[buttonStyle, cancelButtonStyle]}
            activeOpacity={0.8}
          >
            <Text style={{ color: "red" }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonStyle} activeOpacity={0.8}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View> */}
        <TouchableOpacity style={buttonStyle} activeOpacity={0.8}>
          <Text style={buttonTextStyle}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[buttonStyle, guestButtonStyle]}
          activeOpacity={0.8}
          onPress={() => this.props.navigation.navigate("Map")}
        >
          <Text style={[buttonTextStyle, guestButtonTextStyle]}>Guest</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#55555F"
  },
  heading: {
    fontSize: theme.SIZES.font * 2,
    color: theme.COLORS.red,
    textAlign: "center",
    padding: theme.SIZES.base * 2,
    textTransform: "uppercase"
  },
  textInput: {
    width: "80%",
    borderColor: "#6bb6b6",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    color: theme.COLORS.white,
    fontSize: theme.SIZES.font * 1.2
  },
  buttonStyle: {
    width: "80%",
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#6b6b6b",
    borderRadius: 4,
    backgroundColor: theme.COLORS.red
  },
  buttonTextStyle: {
    textAlign: "center",
    fontSize: theme.SIZES.font,
    color: theme.COLORS.white
  },
  errorBtnStyle: {
    borderColor: "red"
  },
  cancelButtonStyle: {
    borderWidth: 0
  },
  guestButtonStyle: {
    width: "80%",
    margin: theme.SIZES.base,
    backgroundColor: "#FFF"
  },
  guestButtonTextStyle: {
    color: theme.COLORS.black
  }
});

import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

class TextInputField extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Text style={styles.inputTitle}>{this.props.title}</Text>
        <TextInput
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.isSecure}
          style={styles.textInputField}
        ></TextInput>
        <View
          style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 1 }}
        ></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputTitle: {
    color: "#ABB4BD",
    fontSize: 14
  },
  textInputField: {
    paddingVertical: 6,
    fontSize: 14
  }
});

export default TextInputField;

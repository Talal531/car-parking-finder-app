import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Alert
} from "react-native";
import Button from "../../components/Button";

const AddParking = props => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = () => {
    Alert.alert("Parking Sport: " + title + "and price is: " + price);
  };

  return (
    <View style={styles.addParkingContainer}>
      <View style={styles.innerContainer}>
        {/* Heading */}
        <View style={styles.heading}>
          <Text style={styles.headingText}>Add Parking Details</Text>
        </View>
        {/* Form */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.textInput}
            name="title"
            value={title}
            onChangeText={text => setTitle(text)}
            placeholder="Enter Parking title"
            placeholderTextColor="#D83C54"
          />
          <TextInput
            style={styles.textInput}
            name="price"
            value={price}
            onChangeText={num => setPrice(num)}
            placeholder="Enter Parking Charges"
            placeholderTextColor="#D83C54"
          />
          {/* Button */}
          <Button onPress={handleSubmit}>Add Parking</Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addParkingContainer: {
    flex: 1,
    backgroundColor: "#ececec"
  },
  innerContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ccc"
  },
  heading: {
    padding: 10
  },
  headingText: {
    fontSize: 28,
    color: "#010101",
    textAlign: "center"
  },
  formContainer: {
    flex: 1,
    marginTop: 10
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowRadius: 2,
    shadowColor: "#ccc",
    shadowOpacity: 2,
    elevation: 3
  }
});

export default AddParking;

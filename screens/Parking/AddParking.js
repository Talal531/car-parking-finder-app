import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import Button from "../../components/Button";

const AddParking = props => {
  return (
    <View style={{ marginTop: 22 }}>
      <View>
        <Text>Hello World!</Text>

        <TouchableHighlight onPress={() => props.setModalVisible(false)}>
          <Text>Hide Modal</Text>
        </TouchableHighlight>
        <Button>Add Parking</Button>
      </View>
    </View>
  );
};

export default AddParking;

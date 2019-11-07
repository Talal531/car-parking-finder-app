import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const ParkingList = props => {
  const { parking, shadow, buy } = styles;
  const { hours, item } = props;

  return (
    <TouchableWithoutFeedback
      key={`parking-${item.id}`}
      onPress={() => this.setState({ active: item.id })}
    >
      <View style={[parking, shadow]}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={{ fontSize: 16 }}>
            x {item.spots} {item.title}
          </Text>
          <View
            style={{
              width: 100,
              borderRadius: 6,
              borderColor: "grey",
              borderWidth: 0.7,
              padding: 4
            }}
          >
            <Text style={{ fontSize: 16 }}>05:00 hrs</Text>
          </View>
        </View>
        <View style={{ flex: 1.5, flexDirection: "row" }}>
          <View
            style={{
              flex: 0.5,
              justifyContent: "center",
              marginHorizontal: 24
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Ionicons name="ios-pricetag" size={16} color="#70818A" />
              <Text>${item.price}</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Ionicons name="ios-star" size={16} color="#70818A" />
              <Text>{item.rating}</Text>
            </View>
          </View>
          <TouchableOpacity style={buy}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={{ fontSize: 25, color: "white" }}>
                ${item.price * 2}
              </Text>
              <Text style={{ color: "white" }}>
                {item.price}x{hours[item.id]} hrs
              </Text>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ fontSize: 25, color: "white" }}>></Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  parking: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 6,
    padding: 15,
    marginHorizontal: 24,
    width: width - 24 * 2
  },
  shadow: {
    shadowColor: "#3D4448",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: "white",
    elevation: 5
  },
  buy: {
    flex: 1.25,
    flexDirection: "row",
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#D83C54"
  }
});

export default ParkingList;

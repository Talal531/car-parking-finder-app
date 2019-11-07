import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  TouchableHighlight
} from "react-native";

import { FontAwesome, Ionicons } from "@expo/vector-icons";
const { Marker } = MapView;

import MapView from "react-native-maps";
import AddParking from "./Parking/AddParking";
import { parkingsSpots } from "../data/parkingSport";
import Header from "../components/Header";

const { height, width } = Dimensions.get("screen");

export default class Map extends React.Component {
  state = {
    hours: {},
    active: null,
    modalVisible: false
  };

  componentWillMount() {
    const hours = {};

    parkingsSpots.map(parking => {
      hours[parking.id] = 1;
    });

    this.setState({ hours });
  }

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  renderHeader() {
    return <Header setModalVisible={this.setModalVisible} />;
  }

  renderParking(item) {
    const { hours } = this.state;
    const totalPrice = item.price * hours[item.id];

    return (
      <TouchableWithoutFeedback
        key={`parking-${item.id}`}
        onPress={() => this.setState({ active: item.id })}
      >
        <View style={[styles.parking, styles.shadow]}>
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
            <TouchableOpacity style={styles.buy}>
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
  }

  renderParkings() {
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        style={styles.parkings}
        data={parkingsSpots}
        extraData={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => this.renderParking(item)}
      />
    );
  }

  renderModal() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => this.setModalVisible(false)}
      >
        <AddParking setModalVisible={this.setModalVisible} />
      </Modal>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <MapView
          style={styles.map}
          maxZoomLevel={20}
          minZoomLevel={15}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {parkingsSpots.map(parking => (
            <Marker
              key={`marker-${parking.id}`}
              coordinate={parking.coordinate}
            >
              <TouchableWithoutFeedback
                onPress={() => this.setState({ active: parking.id })}
              >
                <View
                  style={[
                    styles.marker,
                    styles.shadow,
                    this.state.active === parking.id ? styles.active : null
                  ]}
                >
                  <Text style={styles.markerPrice}>${parking.price}</Text>
                  <Text style={styles.markerStatus}>
                    {" "}
                    ({parking.free}/{parking.spots})
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </Marker>
          ))}
        </MapView>
        {this.renderParkings()}
        {this.renderModal()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 3
  },
  parkings: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 24,
    paddingBottom: 24
  },
  parking: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 6,
    padding: 15,
    marginHorizontal: 24,
    width: width - 24 * 2
  },
  buy: {
    flex: 1.25,
    flexDirection: "row",
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#D83C54"
  },
  marker: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: "#FFFFFF"
  },
  markerPrice: {
    color: "#D83C54",
    fontWeight: "bold"
  },
  markerStatus: {
    color: "#7D818A"
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
  active: {
    borderColor: "#D83C54"
  }
});

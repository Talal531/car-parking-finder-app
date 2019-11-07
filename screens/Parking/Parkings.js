import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import ParkingList from "./ParkingList";

class Parkings extends Component {
  renderParking(item) {
    const { hours } = this.props;
    return <ParkingList hours={hours} item={item} />;
  }

  render() {
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        style={styles.parkings}
        data={this.props.parkingsSpots}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => this.renderParking(item)}
      />
    );
  }
}

Parkings.propTypes = {
  parkingsSpots: PropTypes.array
};

const styles = StyleSheet.create({
  parkings: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 24,
    paddingBottom: 24
  }
});

export default Parkings;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

interface Origin {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface Coordinate {
  latitude: number;
  longitude: number;
}

const origin1: Origin = {
  latitude: -31.428902,
  longitude: -64.18437,
  latitudeDelta: 0.09,
  longitudeDelta: 0.04,
};

const coordinate1: Coordinate = {
  latitude: -31.428902,
  longitude: -64.18437,
};

export default function Home() {
  return (
    <View>
      <View>
        <MapView style={style.map} initialRegion={origin1} />
      </View>
      <View>
        <Marker coordinate={coordinate1} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

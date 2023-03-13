import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";

export default function Appbar() {
  return (
    <View style={style.appbar}>
      <Link to="/">
        <Text style={{fontWeight: "bold", color: "#eee"}}>Home</Text>
      </Link>
      <Link to="/list">
        <Text style={{fontWeight: "bold", color: "#eee"}}>List</Text>
      </Link>
    </View>
  );
}

const style = StyleSheet.create({
  appbar: {
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#343434",
    flexDirection: "row",
    gap: 10,
    padding: 10,
  },
});

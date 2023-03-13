import React from "react";
import { View, Text } from "react-native";
import { Routes, Route } from "react-router-native";
import Home from "./Home";
import Appbar from "./Appbar/Appbar";

export default function Main() {
  return (
    <View>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </View>
  );
}

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter as Router } from "react-router-native";
import Main from "./components/Main";

export default function App() {
  return (
    <View>
      <StatusBar style="light" />
      <Router>
        <Main />
      </Router>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

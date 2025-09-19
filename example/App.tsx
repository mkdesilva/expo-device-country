import ExpoDeviceCountry from "expo-device-country";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Module API Example</Text>
      <Text>{`ExpoDeviceCountry.getSimCountry(): ${ExpoDeviceCountry.getSimCountry()}`}</Text>
      <Text>{`ExpoDeviceCountry.getNetworkCountry(): ${ExpoDeviceCountry.getNetworkCountry()}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  header: {
    fontSize: 30,
    margin: 20,
  },
});

import { Text, View, StyleSheet, ScrollView } from "react-native";
import HomeScreen from "./Screens/HomeScreen";

import { SafeAreaView } from "react-native-safe-area-context";
import Color from "./Shared/Color"
import { NavigationContainer } from "@react-navigation/native";


export default function Index() {
  return (
 
    <ScrollView  style={styles.container}>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Color.black

  }
})

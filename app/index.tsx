import { Text, View, StyleSheet } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import Slider from "./components/Slider";
import PlayList from "./components/PlayList";
import VideoGrid from "./components/VideoGrid"
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "./Shared/Color"

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen/>
      <Slider/>
      <PlayList/>
      <VideoGrid/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: Color.black

  }
})

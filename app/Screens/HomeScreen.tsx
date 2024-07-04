import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from "../components/Header";
import Slider from "../components/Slider";
import PlayList from "../components/PlayList";
import VideoGrid from "../components/VideoGrid";

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Slider />
      <PlayList />
      <VideoGrid />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
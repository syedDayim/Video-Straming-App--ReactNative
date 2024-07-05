import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import YTPlayer from "../components/YTPlayer"
import { Stack } from 'expo-router'


const PlayVideoScreen = () => {
  return (


    <SafeAreaView style={{marginTop: 30}}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView>
        <YTPlayer />
      </ScrollView>
    </SafeAreaView>
  )
}

export default PlayVideoScreen
// Dummy Comment
const styles = StyleSheet.create({})
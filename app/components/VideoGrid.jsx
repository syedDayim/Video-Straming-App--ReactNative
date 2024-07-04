import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import Color from '../Shared/Color'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';

const PlayList = () => {
    const router = useRouter();
    const data=[
        {
            id:1,
            name:'Make Video Using ChatGPT',
            imageUrl:'https://i.ytimg.com/vi/N7xEs9E9Y4A/maxresdefault.jpg',
            url:'N7xEs9E9Y4A'
        },
        {
            id:2,
            name:'10 Skills AI made useless',
            imageUrl:'https://i.ytimg.com/vi/EgEW5KP6I2A/maxresdefault.jpg',
            url:'N7xEs9E9Y4A'

        },
        {
            id:3,
            name:'UI Design Tutorial',
            imageUrl:'https://i.ytimg.com/vi/P1_ciTwn6fE/maxresdefault.jpg',
            url:'P1_ciTwn6fE'
        }

    ]
    const [courseList, setCourseList] = useState([])
    useEffect(()=>{
        setCourseList(data)
    }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Video</Text>
      <FlatList
        data={courseList}
        horizontal={true}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem ={({ item, index }) => {
            return (
                <TouchableOpacity nPress={() => router.push('PlayVideoScreen')}>
                    <Image style={styles.sliderImage} source={{uri: item.imageUrl}}/>
                    <Text style={styles.cardTitle}>{ item.name }</Text>
                </TouchableOpacity>
            )
        }}
      />

    </View>
  )
}

export default PlayList

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
    },
    heading:{
        fontSize: 18,
        color: Color.white,
    },
    sliderImage:{
        width:Dimensions.get('screen').width*0.55,
        resizeMode: "contain",
        height:170,
        marginTop:12,
        borderRadius:10,
        marginRight:20
    },
    cardTitle:{
        color:Color.white,
        marginTop: 10,

    },

})
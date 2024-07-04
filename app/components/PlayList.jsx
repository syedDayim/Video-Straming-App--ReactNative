import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native'
import Color from '../Shared/Color'
import React, { useState, useEffect } from 'react';

const PlayList = () => {
    const data=[
        {
            id:1,
            name:'Ultimate Angular Tutorial',
            imageUrl:'https://i.ytimg.com/vi/NlGkd7TlBDs/maxresdefault.jpg'
        },
        {
            id:2,
            name:'Figma UI/UX Tutorial',
            imageUrl:'https://i.ytimg.com/vi/YLypVu78YTU/maxresdefault.jpg',
        },
        {
            id:3,
            name:'React Tutorial',
            imageUrl:'https://i.ytimg.com/vi/nXyQYpalYgg/maxresdefault.jpg',
        }
    ]
    const [courseList, setCourseList] = useState([])
    useEffect(()=>{
        setCourseList(data)
    }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Featured Courses</Text>
      <FlatList
        data={courseList}
        horizontal={true}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem ={({ item, index }) => {
            return (
                <View>
                    <Image style={styles.sliderImage} source={{uri: item.imageUrl}}/>
                    <Text style={styles.cardTitle}>{ item.name }</Text>
                </View>
            )
        }}
      />

    </View>
  )
}

export default PlayList

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
    },
    heading:{
        fontSize: 18,
        color: Color.white,
    },
    sliderImage:{
        width:Dimensions.get('screen').width*0.66,
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
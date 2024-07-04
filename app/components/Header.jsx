import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Color from '../Shared/Color'
const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View>
                <Text style={styles.welcomeText} >Welcome,</Text>
                <Text style={styles.user}>User</Text>
            </View>
            <Image source={require('../../assets/images/user.png')} style={styles.image}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },  
    image: {
        width: 50,
        height: 50,
    },
    welcomeText:{
        fontSize: 20,
        fontWeight: "700",
        color: Color.white,
    },
    user:{
        color: Color.white,
    },

})
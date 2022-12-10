import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.push('LoginScreen')}>
                <Image
                    style={styles.logo}
                    source={
                        require('../assets/images/headerLogo.png')
                    } />
            </TouchableOpacity>
            <View style={styles.iconsContainer}>

                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={{
                            uri: "https://img.icons8.com/material-outlined/344/ffffff/like--v1.png"
                        }} />
                </TouchableOpacity>


            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        color: "#fff"
    },
    logo: {
        width: 110,
        height: 50,
        resizeMode: 'contain'
    },
    iconsContainer: {
        flexDirection: 'row',

    },
    icon: {
        width: 30,
        height: 30,
        margin: 3,
        resizeMode: 'contain'
    },
    unReadBadge: {
        backgroundColor: 'red',
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    unReadBadgeText: {
        color: "white",
        fontWeight: 'bold'
    }
})

export default Header
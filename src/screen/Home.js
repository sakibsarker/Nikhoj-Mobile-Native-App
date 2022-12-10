import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Post from '../components/Post'
import { POSTS } from '../../src/assets/dummy/posts'

import Header from '../components/Header'
import Switch from '../components/Switch'


const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Switch />


    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
})


export default HomeScreen
import { View,SafeAreaView} from 'react-native'
import React from 'react'
import Card from '../components/Card'
import Switch from '../components/Switch'

const Home = () => {
  return (
    <SafeAreaView>
    <View >
      <Switch/>
      <Card/>
    </View>
    </SafeAreaView>
    
  )
}


export default Home
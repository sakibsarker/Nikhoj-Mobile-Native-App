import { View, Text,StyleSheet,Dimensions} from 'react-native'
import SwitchSelector from "react-native-switch-selector";
import React from 'react'

const Switch = () => {
  const moder = [
    { label: "Lost", value: "Lost" },
    { label: "Getting", value: "Getting" },
  ];
  return(
    <View style={styles.ViewAlien}>
  <View style={styles.mode} >
    <SwitchSelector
  options={moder}
  initial={0}
  onPress={value => console.log(`${value} Mode`)}
/>
  </View>
  </View>
  )
}

const Devicewidth=Math.round(Dimensions.get('window').width);
const styles=StyleSheet.create({
mode:{
  marginTop:10,
  width:Devicewidth-20

},
ViewAlien:{
  alignItems:'center',
}
})





export default Switch
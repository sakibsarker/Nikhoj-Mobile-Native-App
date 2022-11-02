import { View, Text,FlatList,Image,StyleSheet } from 'react-native'
import React from 'react'
const Notification = () => {
  const data=
  [
    {
    id:58,
    post_title:'Hello Sakib',
    postimage:'https://cdn5.vectorstock.com/i/1000x1000/00/69/man-profile-cartoon-vector-19490069.jpg',
    post_city:'Dhaka',
    username:'sakib',
    notification:'New post',
    time:'10:00 AM'
  },
  {
    id:58,
    post_title:'Who are you Sakib',
    postimage:'https://cdn5.vectorstock.com/i/1000x1000/00/69/man-profile-cartoon-vector-19490069.jpg',
    post_city:'Dhaka',
    username:'sakib',
    notification:'Liked your post',
    time:'10:00 AM'
  },
  {
    id:58,
    post_title:'Do you know me Sakib',
    postimage:'https://cdn5.vectorstock.com/i/1000x1000/00/69/man-profile-cartoon-vector-19490069.jpg',
    post_city:'Dhaka',
    username:'sakib',
    notification:'Share post',
    time:'10:00 AM'
  },
  {
    id:58,
    post_title:'Do you know me Sakib',
    postimage:'https://cdn5.vectorstock.com/i/1000x1000/00/69/man-profile-cartoon-vector-19490069.jpg',
    post_city:'Dhaka',
    username:'sakib',
    notification:'Message',
    time:'10:00 AM'
  },
  {
    id:58,
    post_title:'Do you know me Sakib',
    postimage:'https://cdn5.vectorstock.com/i/1000x1000/00/69/man-profile-cartoon-vector-19490069.jpg',
    post_city:'Dhaka',
    username:'sakib',
    notification:'Liked your post',
    time:'10:00 AM'
  },

]
  return (
    <View>
      <FlatList
      data={data}
      keyExtractor={(item,index)=>{return index.toString()}}
      renderItem={({item})=>{
        return(
          <View style={styles.container}>
            <View style={styles.HeaderleftView}>
            <Image style={styles.Headerleft} source={require('../Images/ben10.jpg')}/>
            </View>
              <View style={{flexDirection:'row',marginLeft:10}}>
                <View>
                <Text style={{color:'blue',fontSize:15}}>{item.username}</Text>
                <Text style={{color:'black'}}>{item.time}</Text>
                </View>
                <View>
                  <Text style={{color:'black'}}>{item.notification}</Text>
                </View>
                
              </View>

            
            {/* <Image source={{uri: item.postimage}}/> */}
          </View>
        )
      }}
      />
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    height:'100%',
    padding:15,
    backgroundColor:'white',
    flexDirection:'row',
    alignItems:'center'
  },
  Headerleft:{
    width:'100%',
    height:'100%',
    borderRadius:50,
  },
  HeaderleftView:{
    width:40,
    height:40,
    borderRadius:48/2,
    marginLeft:15,
  }
})

export default Notification;
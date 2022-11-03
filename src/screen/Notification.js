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
    username:'Salim Reja Joy',
    notification:'New post',
    time:'10:00 AM'
  },
  {
    id:58,
    post_title:'Who are you Sakib',
    postimage:'https://cdn5.vectorstock.com/i/1000x1000/00/69/man-profile-cartoon-vector-19490069.jpg',
    post_city:'Dhaka',
    username:'Shekh Foysal',
    notification:'Liked your post',
    time:'10:50 AM'
  },
  {
    id:58,
    post_title:'Do you know me Sakib',
    postimage:'https://cdn5.vectorstock.com/i/1000x1000/00/69/man-profile-cartoon-vector-19490069.jpg',
    post_city:'Dhaka',
    username:'Sakir Faruque',
    notification:'Share a post',
    time:'12:00 PM'
  },
  {
    id:58,
    post_title:'Do you know me Sakib',
    postimage:'https://cdn5.vectorstock.com/i/1000x1000/00/69/man-profile-cartoon-vector-19490069.jpg',
    post_city:'Dhaka',
    username:'Sakib Sarker',
    notification:'Message you',
    time:'11:00 AM'
  },
  {
    id:58,
    post_title:'Do you know me Sakib',
    postimage:'https://cdn5.vectorstock.com/i/1000x1000/00/69/man-profile-cartoon-vector-19490069.jpg',
    post_city:'Dhaka',
    username:'Adiba Jaman',
    notification:'Liked your post',
    time:'09:00 PM'
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
                  <Text style={{color:'black',marginLeft:10}}>{item.notification}</Text>
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
    alignItems:'center',
    marginTop:5,
    borderRadius:20,
  },
  Headerleft:{
    width:'100%',
    height:'100%',
    borderRadius:50,
  },
  HeaderleftView:{
    width:40,
    height:40,
    marginLeft:15,
  }
})

export default Notification;
import { View, Text,Button,StyleSheet,FlatList,Image } from 'react-native'
import React from 'react'

const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../Images/ben10.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../Images/salam.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../Images/post.png'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../Images/salam.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../Images/ben10.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];


const Sms = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
      data={Messages}
      keyExtractor={item=>item.id}
      renderItem={({item})=>(
        <View style={styles.container}>
          <View style={{width:'100%'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{height:50,width:50}}>
                <Image style={styles.userImgWrap} source={item.userImg}/>
              </View>
              <View style={styles.textSection}>
                <View style={styles.userInfo}>
                 <Text style={styles.Textusername}>{item.userName}</Text>
                 <Text style={styles.postTime}>{item.messageTime}</Text>
                </View>
                <Text style={styles.SmsText}>{item.messageText}</Text>
              </View>
            </View>
          </View>
        </View>
      )
    }
      />
    </View>
  )
}

const styles=StyleSheet.create({
  userImgWrap:{
    marginTop:10,
    height:'100%',
    width:'100%',
    borderRadius:50,
  },
  Card:{
    width:'100%'
  },
  container:{
    flex:1,
    paddingLeft:10,
    paddingRight:10,
    alignItems:'center',
    backgroundColor:'#ffffff',
  },
  textSection:{
    flexDirection:'column',
    justifyContent:'center',
    padding:15,
    paddingLeft:0,
    marginLeft:10,
    fontWeight:'300',
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'
  },
  userInfo:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:5

  },
  Textusername:{
    fontSize:14,
    fontWeight:'bold'

  },
  postTime:{
    fontSize:12,
    color:'#666',
    marginRight:50,
  },
  SmsText:{
    fontSize:14,
    color:'#333333',
  }
})

export default Sms
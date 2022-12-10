import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.flexdd}>
          <Image
            style={styles.imageStyle}
            source={require('../Images/post.png')}
          />
          <View>
            <Text style={styles.title}>Sakib Sarker</Text>
            <Text style={styles.caption}>@sakib</Text>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Ionicons name="location-sharp" color="#777777" size={25} />
            <Text style={{color: '#777777', marginLeft: 10, fontWeight: '400'}}>
              Gobindaganj,BD
            </Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="call" color="#777777" size={25} />
            <Text style={{color: '#777777', marginLeft: 10, fontWeight: '400'}}>
              +8801533515992
            </Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="ios-mail-sharp" color="#777777" size={25} />
            <Text style={{color: '#777777', marginLeft: 10, fontWeight: '400'}}>
              sakib15-3824@diu.bd.edu
            </Text>
          </View>

          <View style={styles.infoBoxWrapper}>
            <View style={styles.infoBox}>
              <Text>200 TK</Text>
              <Text
                onPress={() => navigation.navigate('Wallet')}
                style={{fontWeight: '700'}}>
                Wallet
              </Text>
            </View>
            <View style={styles.infoBox}>
              <Text>12</Text>
              <Text
                onPress={() => navigation.navigate('Task')}
                style={{fontWeight: '700'}}>
                Task
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.menuItem}>
            <Ionicons name="person-circle-outline" color="#777777" size={20} />
            <TouchableOpacity>
              <Text
                onPress={() => navigation.navigate('Editprofile')}
                style={{marginLeft: 10}}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
            <Ionicons name="card-outline" color="#777777" size={20} />
            <TouchableOpacity>
              <Text
                onPress={() => navigation.navigate('Payment')}
                style={{marginLeft: 10}}>
                Payment
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
            <Ionicons name="ios-construct-outline" color="#777777" size={20} />
            <TouchableOpacity>
              <Text
                onPress={() => navigation.navigate('Support')}
                style={{marginLeft: 10}}>
                Support
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
            <Ionicons name="settings-sharp" color="#777777" size={20} />
            <TouchableOpacity>
              <Text
                onPress={() => navigation.navigate('Setting')}
                style={{marginLeft: 10}}>
                Setting
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
            <Ionicons name="exit-outline" color="#777777" size={20} />
            <TouchableOpacity>
              <Text style={{marginLeft: 10}}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flexdd: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
  },
  imageStyle: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    marginTop: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Profile;

import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ProfileDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={{paddingHorizontal: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          style={{height: 80, width: 80, borderRadius: 100, borderColor:'orange', borderWidth:2}}
          source={require('../assets/userProfile.jpg')}
        />
        <View style={{width: 75, alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: '400', color: 'black'}}>
            4
          </Text>
          <Text style={{fontSize: 16, color: 'black'}}>Posts</Text>
        </View>
        <View style={{width: 75, alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: '400', color: 'black'}}>
            1.2 M
          </Text>
          <Text style={{fontSize: 16, color: 'black'}}>Followers</Text>
        </View>
        <View style={{width: 75, alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: '400', color: 'black'}}>
            1
          </Text>
          <Text style={{fontSize: 16, color: 'black'}}>Following</Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 22,
          color: 'black',
          fontWeight: 'bold',
          marginTop: 10,
        }}>
        Nguyễn Đắc Cường
      </Text>
      <Text style={{color: 'black', fontSize:16, fontWeight:400}}>Normal but not trivial</Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.push('EditProfile', {name: 'Nguyễn Đắc Cường', accountName:'daccuong2604', profileImage:require('../assets/userProfile.jpg'), email:'nguyendaccuong2002@gmail.com', bio:'Normal but not trivial'})}>
          <Text
            style={{
              backgroundColor: '#E1E1E1',
              width:170,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
              textAlign: 'center',
              color: 'black',
              fontSize:16
            }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('ShareProfile', {link: 'https://www.facebook.com/nguyendaccuong2002', name: 'Nguyễn Đắc Cường', accountName:'daccuong2604'})}>
          <Text
            style={{
              backgroundColor: '#E1E1E1',
              width: 170,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
              textAlign: 'center',
              color: 'black',
              fontSize:16
            }}>
            Share Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileDetails;
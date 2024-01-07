import {View, Text, Image, TouchableOpacity, Modal, FlatList} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {UserData, typeData} from '../../storage/datas/UserData';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
import { convertLocalHost } from '../../constants/Host';

const UserProfile = () => {
  const {logout, isLoading, accountInfo} = useContext(AuthContext);
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  //logout
  const handleLogout = async () => {
    await logout();
  }
  const handleModal = () => {
    setOpen(!open);
  };

  const [selected, setSelected] = useState(true);

  const renderItem = item =>{
    return(
      <View>
        <Image style={{height: 130.9, width: 130.9}} source={item.item.post.image} />
      </View>
    )
  }


  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <Spinner visible={isLoading} />
        {/* Header */}
        <View style={{paddingHorizontal: 15, paddingTop: 10, height: 55}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
          {accountInfo.appName}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={{marginRight: 15}}>
            <FontAwesome name='plus-square-o' style={{fontSize:24}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleModal}>
            <Ionic name='menu-sharp' size={24} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => {
          setOpen(!open);
        }}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View
            style={{
              backgroundColor: '#ffffff',
              height: 280,
            }}>
            <View style={{backgroundColor:'black', width:'100%', height:2}}></View>
            <TouchableOpacity onPress={handleModal}>
              <Ionic name='close' size={30} color={'black'}/>
              <View style={{paddingHorizontal: 20}}>
                <TouchableOpacity style={{borderBottomWidth: 1}} onPress={() => {
                  setOpen(false);
                  navigation.push('EditProfile', {name: accountInfo.firstName, accountName:accountInfo.appName, profileImage:accountInfo.avatarPath, email:accountInfo.email, bio:accountInfo.bio});
                  }}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Edit Profile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}} onPress={() => {
                  setOpen(false)
                  navigation.push('ChangePassword');
                }}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Change Password
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Share Profile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}} onPress={handleLogout}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
            {/* Profile detail */}
            <View style={{paddingHorizontal: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {accountInfo.avatarPath?(
          <Image
          style={{height: 80, width: 80, borderRadius: 100, borderColor:'black', borderWidth:2}}
          source={{uri:convertLocalHost(accountInfo.avatarPath)}}
        />
        ):(
          <Image
          style={{height: 80, width: 80, borderRadius: 100, borderColor:'black', borderWidth:2}}
          source={require('../../assets/avatar.jpg')}
        />
        )}
        
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
        {accountInfo.firstName}
      </Text>
      <Text style={{color: 'black', fontSize:16, fontWeight:400}}>{accountInfo.bio}</Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.push('EditProfile', {name: accountInfo.firstName, accountName:accountInfo.appName, profileImage:accountInfo.avatarPath, email:accountInfo.email, bio:accountInfo.bio})}>
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
        {/* Profile post */}
        <View style={{marginTop: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {typeData.map(item => {
          return (
            <View
              key={item.id}
              style={{
                width: 196.36,
                paddingBottom: 15,
                borderBottomWidth: selected === item.id ? 1 : 0,
              }}>
              <TouchableOpacity onPress={() => setSelected(item.id)}>
                <Ionic name={item.icon} size={22} style={{alignSelf: 'center'}} />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      {selected == 1 && (
        <FlatList
          data={UserData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
    </View>
  )
}

export default UserProfile
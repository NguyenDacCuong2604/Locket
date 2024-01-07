import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
  Modal
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'; 
import { launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
import { ToastMessage } from '../ShowToast';
import { convertLocalHost } from '../../constants/Host';
import { AuthContext } from '../../context/AuthContext';

const EditProfile = ({route, navigation}) => {
  const {updateInfoAccount} = useContext(AuthContext);
  const {email, name, accountName, profileImage, bio} = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const [editImage, setEditImage] = useState(convertLocalHost(profileImage));
  const [editName, setEditName] = useState(name);
  const [editAccountName, setEditAccountName] = useState(accountName);
  const [editBio, setEditBio] = useState(bio);

  const openCamera = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera is required!');
      return;
    }

    let result = await launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setEditImage(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if(permissionResult.granted === false){
      alert('Permission to access gallery is requird!');
      return;
    }

    let result = await launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if(!result.canceled){
      console.log(result.assets[0].uri);
      setEditImage(result.assets[0].uri);
    }
  }

  const removeImage = () => {
    setEditImage(null);
  }

  //Khi click Check
  const update = async () => {
    if(editAccountName!=accountName || editName != name || editBio != bio || editImage != convertLocalHost(profileImage)){
      await updateInfoAccount(editName, editAccountName, editBio, editImage);
    }
    navigation.navigate("UserProfile");
  }
  
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{fontSize: 35}} />
        </TouchableOpacity>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Edit Profile</Text>
        <TouchableOpacity
          onPress={update}>
          <Ionic name="checkmark" style={{fontSize: 35, color: '#3493D9'}} />
        </TouchableOpacity>
      </View>
      <View style={{padding: 20, alignItems: 'center'}}>
        {editImage? (
          <Image
          source={{uri:editImage}}
          style={{width: 80, height: 80, borderRadius: 100, borderWidth:2, borderColor:'black'}}
          />
        ):(
          <Image
          source={require('../../assets/avatar.jpg')}
          style={{width: 80, height: 80, borderRadius: 100,  borderWidth:2, borderColor:'black'}}
          />
        )}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text
          style={{
            color: '#3493D9', paddingTop:5
          }}>
          Change profile photo
        </Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 10}}>
        <View>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Email
          </Text>
          <Text style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
              fontWeight:'bold'
            }}>
            {email}
          </Text>
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Name
          </Text>
          <TextInput
            placeholder="name"
            defaultValue={editName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
            onChangeText={text => setEditName(text)}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Username
          </Text>
          <TextInput
            placeholder="accountname"
            defaultValue={editAccountName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
            onChangeText={text => setEditAccountName(text)}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Bio
          </Text>
          <TextInput
            placeholder="Enter your bio"
            defaultValue={editBio}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
            onChangeText={text => setEditBio(text)}
          />
        </View>
      </View>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // to make background semi-transparent
            flexDirection:'col'
          }}>
          <View style={{
              backgroundColor: 'white',
              padding: 20,
              width: '80%',
              borderRadius: 10,
              alignItems: 'center',
              flexDirection: 'col',
              // justifyContent:'space-between'
            }}>
             <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                marginRight: -10,
                marginTop: -15,
              }}
              onPress={() => setModalVisible(false)}>
              <Ionic name='close' size={24}/>
            </TouchableOpacity>
            <Text style={{fontSize:20, fontWeight:'600'}}>Profile Photo</Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent:'space-between'
              
            }}>
           
            <TouchableOpacity
              style={{
                marginBottom: 10,
                padding:10
              }}
              onPress={() => {
                setModalVisible(false);
                // handle Camera logic here
                openCamera();
              }}>
              <View style={{height:80, width:80, justifyContent:'center', alignItems:'center', backgroundColor:'#DCE0E2', borderRadius:10, padding:10}}>
                  <Ionic name='camera-outline' size={24} color='orange'/>
                  <Text>Camera</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginBottom: 10,
                padding:10
              }}
              onPress={() => {
                setModalVisible(false);
                // handle Gallery logic here
                openGallery();
              }}>
              <View style={{height:80, width:80,justifyContent:'center', alignItems:'center', backgroundColor:'#DCE0E2', borderRadius:10, padding:10}}>
                  <Ionic name='image-outline' size={24} color='orange'/>
                  <Text>Gallery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginBottom: 10,
                padding:10
              }}
              onPress={() => {
                setModalVisible(false);
                // handle Remote logic here
                removeImage();
              }}>
              <View style={{height:80, width:80,justifyContent:'center', alignItems:'center', backgroundColor:'#DCE0E2', borderRadius:10, padding:10}}>
                  <Ionic name='trash-outline' size={24} color='gray'/>
                  <Text>Remove</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EditProfile;
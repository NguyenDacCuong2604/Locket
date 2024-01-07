import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons'; 
import { launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';

const AddPost = ({navigation}) => {
  const [urlImage, setUrlImage] = useState(null);

  const openCamera = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera is required!');
      return;
    }

    let result = await launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setUrlImage(result.assets[0].uri);
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
      quality: 1,
    });

    if(!result.canceled){
      console.log(result.assets[0].uri);
      setUrlImage(result.assets[0].uri);
    }
  }

  const removeImage = () => {
    setUrlImage(null);
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}> 
        <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{fontSize: 35, color:'black'}} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: 'bold', color:'black'}}>Add Post</Text>
        <TouchableOpacity
          disabled={urlImage?false:true}
          onPress={() => {navigation.push('UploadPost', {urlImage:urlImage})}}>
          {urlImage?(
            <Text style={{color:'black', fontSize:18, fontWeight:500, marginRight:10}}>Next</Text>
          ):(
            <Text style={{color:'black', fontSize:18, fontWeight:500, marginRight:10, opacity:0.4}}>Next</Text>
          )}
          
        </TouchableOpacity>
      </View>
      <View style={{width:'100%', height:'80%',backgroundColor:"#373737", justifyContent:'center', alignItems:'center'}}>
          {urlImage? (
            <Image source={{uri:urlImage}}  style={{width:'90%',aspectRatio: 1, resizeMode: 'contain', justifyContent:'center', alignItems:'center'}}/>
          ):(
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Ionic name='camera' style={{color:'white', fontSize:64}} />
              <Text style={{fontSize:20, color:'white'}}>Take your photo</Text>
            </View>
          )}
      </View>
      <View
            style={{
              backgroundColor: '#EEF1F1',
              borderRadius: 10,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent:'center',
              position:'absolute',
              bottom:0,
              width:'100%'
            }}>
           
            <TouchableOpacity
              style={{
                marginBottom: 10,
                padding:10
              }}
              onPress={openCamera}
              >
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
              onPress={openGallery}
              >
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
              onPress={removeImage}
              >
              <View style={{height:80, width:80,justifyContent:'center', alignItems:'center', backgroundColor:'#DCE0E2', borderRadius:10, padding:10}}>
                  <Ionic name='trash-outline' size={24} color='red'/>
                  <Text style={{color:'red'}}>Remove</Text>
              </View>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  )
}

export default AddPost
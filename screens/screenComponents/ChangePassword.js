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
import { ToastMessage } from '../ShowToast';
import { AuthContext } from '../../context/AuthContext';

const ChangePassword = ({navigation}) => {
  const [oldPassword, setOldPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const {changePassword} = useContext(AuthContext);

  const changePasswordAccount = () => {
    if(!oldPassword || !newPassword || !confirmPassword){
      ToastMessage("Please enter filed!!!");
      return;
    }
    if(newPassword != confirmPassword){
      ToastMessage("New password not equal confirm password");
      return;
    }
    if(newPassword.length <6){
      ToastMessage("Password must 6 characters!!!");
      return;
    }
    changePassword(oldPassword, newPassword);
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
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Change Password</Text>
        <TouchableOpacity
          onPress={changePasswordAccount}>
          <Ionic name="checkmark" style={{fontSize: 35, color: '#3493D9'}} />
        </TouchableOpacity>
      </View>
      <View style={{padding: 20}}>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
              fontSize:20,
              fontWeight:'500'
            }}>
            Old Password
          </Text>
          <TextInput
            placeholder="Enter your old password"
            style={{
              marginTop:8,
              fontSize: 18,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
            onChangeText={text => setOldPassword(text)}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
                marginTop:8,
                opacity: 0.5,
                fontSize:20,
                fontWeight:'500'
            }}>
            New Password
          </Text>
          <TextInput
            placeholder="Enter your New Password"
            style={{
              fontSize: 18,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
            onChangeText={text => setNewPassword(text)}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
                marginTop:8,
                opacity: 0.5,
                fontSize:20,
                fontWeight:'500'
            }}>
            Confirm Password
          </Text>
          <TextInput
            placeholder="Enter confirm password"
            style={{
              fontSize: 18,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
            onChangeText={text => setConfirmPassword(text)}
          />
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { ToastMessage } from "../screens/ShowToast";
import { ToastAndroid } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [accessToken, setAccessToken] = useState('');
    const [splashLoading, setSplashLoading] = useState(false);
    const [accountInfo, setAccountInfo] = useState({}); 
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const [isRegister, setIsRegister] = useState(false);

    const register = (email, password, firstName) => {
        setIsLoading(true);

        axios.post('http://192.168.1.38:8000/api/v1/auth/register', {
            'email': email,
            'password': password,
            'firstName':firstName
        },{
            "headers": {
              'Content-Type': 'application/json',
            }
        })
        .then(res => {
            let userInfo = res.data;
            setIsLoading(false);
            console.log(userInfo);
            ToastMessage("Please check email verify account!!!");
            setIsRegister(true);
        })
        .catch(e => {
            console.log(e.response.data);
            setIsLoading(false);
            ToastMessage(e.response.data.email+'-'+e.response.data.message);
            setIsRegister(false);
        })
    }

    const login = (email, password) => {
        setIsLoading(true);
        axios.post('http://192.168.1.38:8000/api/v1/auth/login', {
            'email': email,
            'password': password
        },{
            "headers": {
              'Content-Type': 'application/json',
            }
        })
        .then(res => {
            let userInfo = res.data;
            //Storage save jwt
            AsyncStorage.setItem('accessToken', userInfo.data.token)
            setAccessToken(userInfo.data.token);
            console.log(userInfo.data.token);
            setIsLoading(false);
            ToastMessage('Loginsuccess!!');
        })
        .catch(e => {
            console.log(e.response.data.message);
            setError(e.response.data.message);
            setIsLoading(false);
            ToastMessage(e.response.data.message);
        })
    }

    const logout = async () => {
        try {
            setIsLoading(true);
            await AsyncStorage.removeItem('accessToken');
            setAccessToken(null);
            setStatus('Logout success!!')
            setIsLoading(false);
            ToastMessage('Logout success!!');
        } catch (e) {
            console.log(e);
            setError('Logout error')
        }

    }

    const updateInfoAccount = (firstName, appName, bio, avatar) => {
        try {
            // const accessToken = await AsyncStorage.getItem('accessToken'); // Lấy JWT từ bộ nhớ
            if (accessToken) {
                setIsLoading(true);
                const formData = new FormData();
                formData.append('firstName', firstName);
                formData.append('appName', appName);
                formData.append('bio', bio);
                if(avatar){
                    formData.append('avatar', {
                        uri:avatar,
                        type: 'image/jpeg',
                        name: 'avatar.jpg'
                    });
                }
             
                const config = {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data', // Set content type to form-data
                },
                };

                axios.put('http://192.168.1.38:8000/api/v1/accounts', formData, config)
                .then(res => {
                    let info = res.data;
                    // Xử lý dữ liệu nhận được từ API
                    console.log(info)
                    setIsLoading(false);
                    setAccountInfo({
                        ...accountInfo,
                        firstName: firstName,
                        appName: appName,
                        bio: bio,
                        avatarPath:avatar
                      });
                    console.log(accountInfo.bio)
                    ToastMessage('Update info success!!');
                })
                .catch(e => {
                    console.log(e.response);
                    setIsLoading(false);
                })
            } else {
                console.log('Access token not found'); // Xử lý khi không tìm thấy JWT
            }
        } catch (error) {
            console.log('Error retrieving access token:', error);
        }
    }


    const getAccountInfo = async () => {
        try {
            // const accessToken = await AsyncStorage.getItem('accessToken'); // Lấy JWT từ bộ nhớ
            if (accessToken) {
                setIsLoading(true);
                axios.get('http://192.168.1.38:8000/api/v1/accounts', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`, // Thêm JWT vào header Authorization
                        'Content-Type': 'application/json',
                    }
                })
                .then(res => {
                    let info = res.data.data;
                    // Xử lý dữ liệu nhận được từ API
                    setAccountInfo(info);
                    console.log(info)
                    setIsLoading(false);
                })
                .catch(e => {
                    console.log(e.response.data.message);
                    setIsLoading(false);
                })
            } else {
                console.log('Access token not found'); // Xử lý khi không tìm thấy JWT
            }
        } catch (error) {
            console.log('Error retrieving access token:', error);
        }
    }

    const isLoggedIn = async () => {
        try{
            setSplashLoading(true);
            let accessTokenStorage = await AsyncStorage.getItem('accessToken');
            if(accessTokenStorage){
                setAccessToken(accessTokenStorage);
            }
            setSplashLoading(false);
        } catch (e) {
            setSplashLoading(false);
            console.log(e);
        }
    }

    const resetIsRegister = () => {
        setIsRegister(false)
    }

    //change password
    const changePassword = (oldPassword, newPassword) => {
        try {
            // const accessToken = await AsyncStorage.getItem('accessToken'); // Lấy JWT từ bộ nhớ
            if (accessToken) {
                setIsLoading(true);
                axios.post('http://192.168.1.38:8000/api/v1/auth/change-password', {
                    'oldPassword': oldPassword,
                    'newPassword': newPassword
                },{
                    "headers": {
                    'Authorization': `Bearer ${accessToken}`,
                      'Content-Type': 'application/json',
                    }
                })
                .then(res => {
                    let info = res.data.data;
                    // Xử lý dữ liệu nhận được từ API
                    console.log(info)
                    setIsLoading(false);
                    ToastMessage("Update password success");
                })
                .catch(e => {
                    console.log(e.response.data.message);
                    ToastMessage(e.response.data.message);
                    setIsLoading(false);
                })
            } else {
                console.log('Access token not found'); // Xử lý khi không tìm thấy JWT
            }
        } catch (error) {
            console.log('Error retrieving access token:', error);
        }
    }

    //add post
    const addPost = async (content, mediaState, multipartFile) => {
        try {
            if (accessToken) {
                setIsLoading(true);
                const formData = new FormData();
                formData.append('content', content);
                formData.append('mediaState', mediaState.toLowerCase());
                formData.append('multipartFile', {
                    uri: multipartFile,
                    type: 'image/jpeg',
                    name: 'post.jpg'
                });
              
                const config = {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data', // Set content type to form-data
                },
                };

                axios.put('http://192.168.1.38:8000/api/v1/posts', formData, config)
                .then(res => {
                    let info = res.data;
                    // Xử lý dữ liệu nhận được từ API
                    console.log(info)
                    setIsLoading(false);
                    ToastMessage('Upload post success!!');
                })
                .catch(e => {
                    console.log(e.response);
                    setIsLoading(false);
                })
            } else {
                console.log('Access token not found'); // Xử lý khi không tìm thấy JWT
            }
        } catch (error) {
            console.log('Error retrieving access token:', error);
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, []);

    return(
        <AuthContext.Provider value={{register, login, isLoading, accessToken, logout, splashLoading, getAccountInfo, accountInfo, status, error, isRegister, resetIsRegister, updateInfoAccount, changePassword, addPost}}>{children}</AuthContext.Provider>
    )
}
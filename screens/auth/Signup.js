import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
import { ToastMessage } from '../ShowToast';

const Signup = ({navigation}) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    //email
    const [email, setEmail] = useState(null);
    //full name
    const [firstName, setFirstName] = useState(null);
    //password
    const [password, setPassword] = useState(null);

    const {isLoading, register, isRegister} = useContext(AuthContext);
    useEffect(() => {
        if(isRegister){
            setEmail(null);
            setFirstName(null);
            setPassword(null);
            navigation.push("Welcome");
        }
    }, [isRegister])

    const signupAccount = async () => {
        if(!email){
            ToastMessage("Enter your email!!!");
            return;
        }
        if(!firstName){
            ToastMessage("Enter your name!!!");
            return;
        }
        if(!password){
            ToastMessage("Enter your password");
            return;
        }
        if(password.length<6){
            ToastMessage("Password must be at least 6 characters");
            return;
        }
        register(email, password, firstName);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Spinner visible={isLoading} />
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 4 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        Create Account
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Connect with your friend today!</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        color:COLORS.black,
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Email address</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%", color:COLORS.black
                            }}
                            value={email} onChangeText={text => setEmail(text)}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        color:COLORS.black,
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Full name</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22
                    }}>
        
                        <TextInput
                            placeholder='Enter your full name'
                            placeholderTextColor={COLORS.black}
                            keyboardType='default'
                            style={{
                                width: "100%", color:COLORS.black
                            }}
                            value={firstName} onChangeText={text => setFirstName(text)}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        color:COLORS.black,
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Password</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={!isPasswordShown}
                            style={{
                                width: "100%", color:COLORS.black
                            }}
                            value={password} onChangeText={text => setPassword(text)}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={signupAccount}>
                    <Text style={{fontSize:20, fontWeight:700}}>Sign up</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.black,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14, color:COLORS.black }}>Or Sign up with</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.black,
                            marginHorizontal: 10
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.black,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../../assets/google.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text style={{color:COLORS.black}}>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black,
                            fontWeight: 600,
                            marginLeft: 6
                        }}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button:{
        marginTop:20,
        width:'100%',
        backgroundColor: '#feb800',
        paddingBottom:16,
        paddingVertical:10,
        borderColor: COLORS.primary,
        borderWidth:1,
        borderRadius:24,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#feb800',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10
    }
})

export default Signup
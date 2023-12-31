import { View, Text, TextInput, TouchableOpacity, Image, Pressable} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { StyleSheet } from 'react-native';

const Login = ({navigation}) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    return(
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.black}}>
            <View style={{flex:1, marginHorizontal:22}}>
                <View style={{marginVertical:22}}>
                    <Text 
                        style={{fontSize:22, fontWeight:'bold', marginVertical:12, color:COLORS.white}}>Hi Welcome Back ! 👋</Text>
                    <Text style={{fontSize:16, color:COLORS.white, fontWeight:600}}>
                        Hello again you have been missed!
                    </Text>
                </View>

                <View style={{marginBottom:12}}>
                    <Text style={{fontSize:16, marginVertical:8, color:COLORS.white, fontWeight:500}}>
                        Email address
                    </Text>

                    <View style={{width:'100%', height:48, borderColor: COLORS.white,
                        borderWidth:1, borderRadius:8, alignItems:'center', justifyContent:'center', paddingLeft:22}}>
                        <TextInput placeholder='Enter your email address' placeholderTextColor={COLORS.white}
                            keyboardType='email-address' style={{width:'100%', color:COLORS.white}} />
                    </View>
                </View>

                <View style={{marginBottom:12}}>
                    <Text style={{fontSize:16, marginVertical:8, color:COLORS.white, fontWeight:500}}>
                        Password
                    </Text>

                    <View style={{width:'100%', height:48, borderColor: COLORS.white,
                        borderWidth:1, borderRadius:8, alignItems:'center', justifyContent:'center', paddingLeft:22}}>
                            <TextInput placeholder='Enter your password' placeholderTextColor={COLORS.white}
                            style={{width:'100%', color:COLORS.white}} secureTextEntry={!isPasswordShown} />

                            <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{position:"absolute", right:12}}>
                                {
                                    isPasswordShown == true ? (
                                        <Ionicons name='eye-off' size={24} color={COLORS.white} />
                                    ) : (
                                        <Ionicons name='eye' size={24} color={COLORS.white} />
                                    )
                                }
                            </TouchableOpacity>
                    </View>
                </View>

                <View style={{flexDirection:'row', marginVertical:6}}>
                        <Checkbox style={{marginRight:8}} value={isChecked} onValueChange={setIsChecked}
                    />
                        <Text style={{color:COLORS.white}}>Remember Me</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize:20, fontWeight:700}}>Login</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14, color:COLORS.white, fontWeight:500 }}>Or Login with</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
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
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/google.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text style={{color:COLORS.white}}>Google</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.white }}>Don't have an account ? </Text>
                    <Pressable
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            fontWeight: 600,
                            marginLeft: 6
                        }}>Sign up</Text>
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

export default Login
import { View, Text, Image, Pressable } from 'react-native';
import React, { useContext, useEffect } from 'react';
import COLORS from '../../constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../../components/Button';
import { AuthContext } from '../../context/AuthContext';


const Welcome= ({navigation}) => {

    const { resetIsRegister} = useContext(AuthContext);

    useEffect(()=> {
        resetIsRegister();
    }, [])

    return(
        <LinearGradient style={{flex:1}}
        colors={['#007260', '#39B68D']} >
            <View style={{flex:1}}>
                <View>
                    <Image 
                    source={require("../../assets/hero1.jpg")}
                    style={{
                        height:100,
                        width:100,
                        borderRadius:20,
                        position: "absolute",
                        top:10,
                        transform:[
                            {translateX:20},
                            {translateY:50},
                            {rotate:"-15deg"}
                        ]
                    }}/>
                    <Image 
                    source={require("../../assets/hero2.jpg")}
                    style={{
                        height:100,
                        width:100,
                        borderRadius:20,
                        position: "absolute",
                        top:-30,
                        left:100,
                        transform:[
                            {translateX:50},
                            {translateY:50},
                            {rotate:"-5deg"}
                        ]
                    }}/>
                    <Image 
                    source={require("../../assets/hero2.jpg")}
                    style={{
                        height:100,
                        width:100,
                        borderRadius:20,
                        position: "absolute",
                        top:130,
                        left:-50,
                        transform:[
                            {translateX:50},
                            {translateY:50},
                            {rotate:"15deg"}
                        ]
                    }}/>
                    <Image 
                    source={require("../../assets/hero3.jpg")}
                    style={{
                        height:200,
                        width:200,
                        borderRadius:20,
                        position: "absolute",
                        top:100,
                        left:100,
                        transform:[
                            {translateX:50},
                            {translateY:50},
                            {rotate:"-15deg"}
                        ]
                    }}/>
                </View>
                {/* Content */}
                <View style={{
                    paddingHorizontal:18,
                    position: "absolute",
                    top:370,
                    width:"100%",
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', paddingBottom:12}}>
                        <Image source={require("../../assets/locket.webp")} 
                        style={{
                            height:42,
                            width:42,
                            borderRadius:12
                        }}/>
                        <Text style={{fontSize:42, fontWeight:800, color:COLORS.white, paddingLeft:12}}>Locket</Text>
                    </View>
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Text
                            style={{fontSize:17, fontWeight:800, color:'white', paddingHorizontal:60}}
                        >Ảnh trực tiếp từ bạn bè,</Text>
                        <Text
                            style={{fontSize:17, fontWeight:800, color:'white', paddingHorizontal:60}}    
                        >ngay trên màn hình chính</Text>
                    </View>

                    <Button
                    onPress={() => navigation.navigate("Signup")}/>

                    <View style={{
                        flexDirection: 'row',
                        marginTop:12,
                        justifyContent: 'center'
                    }}>
                        <Pressable onPress={() => navigation.navigate("Login")}>
                        <Text style={{
                            fontSize:20,
                            fontWeight:600,
                            color: COLORS.white
                        }}>Sign in</Text>
                        </Pressable>
                    </View>
                  </View>
            </View>
        </LinearGradient>
    )
}

export default Welcome      
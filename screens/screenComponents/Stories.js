import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const Stories = () => {

    const navigation = useNavigation();

    const storyInfo = [
        {
          id: 1,
          name: 'Your Story',
          image: require('../../storage/images/userProfile.jpg'),
        },
        {
          id: 0,
          name: 'Yến Vi',
          image: require('../../storage/images/profile1.jpg'),
        },
        {
          id: 0,
          name: 'Duy Mến',
          image: require('../../storage/images/profile2.jpg'),
        },
        {
          id: 0,
          name: 'Quốc Nam',
          image: require('../../storage/images/profile3.jpg'),
        },
        ,
        {
          id: 0,
          name: 'Phước Hoài',
          image: require('../../storage/images/profile4.jpg'),
        },
        ,
        {
          id: 0,
          name: 'Nhựt Tiến',
          image: require('../../storage/images/profile5.jpg'),
        },
      ];


  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingVertical:10}}>
        {
            storyInfo.map((data, index) => {
                return(
                    <TouchableOpacity key={index} onPress={() => navigation.push('Status', {
                        name: data.name,
                        image: data.image
                    })}>
                        <View style={{
                            flexDirection:'column',
                            paddingHorizontal:8,
                            position:'relative',
                            width:80
                        }}>
                            {
                                data.id == 1 ?
                                (
                                    <View style={{
                                        position:'absolute',
                                        bottom:15,
                                        right:10,
                                        zIndex:1
                                    }}>
                                        <Entypo name='circle-with-plus' style={{fontSize:20, color:'#405de6', backgroundColor:'white', borderRadius:100}} />
                                    </View>
                                ) : null
                            }

                            <View style={{
                                width:68,
                                height:68,
                                backgroundColor:'white',
                                borderWidth:1.8,
                                borderRadius:100,
                                borderColor:'#c13584',
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                                <Image source={data.image} style={{resizeMode: 'cover',
                                    width: '92%',
                                    height: '92%',
                                    borderRadius: 100,
                                    backgroundColor: 'orange'
                                }} />
                            </View>
                            
                            <Text style={{
                                paddingTop:4,
                                textAlign:'center',
                                fontSize:12,
                                opacity: data.id == 0 ? 1 : 0.75
                            }}>
                                {data.name}
                            </Text>

                        </View>
                    </TouchableOpacity>
                );
            })
        }
    </ScrollView>
  );
};


export default Stories;
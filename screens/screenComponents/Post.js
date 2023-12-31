import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Post = () => {

    const postInfo = [
        {
          postTitle: 'mr shermon',
          postPersonImage: require('../../storage/images/userProfile.jpg'),
          postImage: require('../../storage/images/post1.jpg'),
          likes: 765,
          isLiked: false,
          pin:false
        },
        {
          postTitle: 'chillhouse',
          postPersonImage: require('../../storage/images/profile5.jpg'),
          postImage: require('../../storage/images/post2.jpg'),
          likes: 345,
          isLiked: false,
          pin:false
        },
        {
          postTitle: 'Tom',
          postPersonImage: require('../../storage/images/profile4.jpg'),
          postImage: require('../../storage/images/post3.jpg'),
          likes: 734,
          isLiked: false,
          pin:false
        },
        {
          postTitle: 'The_Groot',
          postPersonImage: require('../../storage/images/profile3.jpg'),
          postImage: require('../../storage/images/post4.jpg'),
          likes: 875,
          isLiked: false,
          pin:false
        },
      ];

  return (
    <View>
        {
            postInfo.map((data, index) => {
                const [like, setLike] = useState(data.isLiked);
                const [pin, setPin] = useState(data.pin);

                return(
                    <View key={index} style={{
                        paddingBottom:10,
                        borderBottomColor: 'gray',
                        borderBottomWidth: 0.1
                    }}>
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'space-between',
                            padding:15
                        }}>
                            <View style={{
                                flexDirection:'row',
                                alignItems:'center'
                            }}>
                                <Image source={data.postPersonImage} style={{
                                    width:40,
                                    height:40,
                                    borderRadius:100
                                }}/>
                                <View style={{paddingLeft:5}}>
                                    <Text style={{fontSize:15, fontWeight:'bold'}}>
                                        {data.postTitle}
                                    </Text>
                                </View>
                            </View><Feather name='more-vertical' style={{fontSize:20}} />
                        </View>
                        <View style={{
                            position:'relative',
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                            <Image source={data.postImage} style={{width:'100%', height:400}} />
                        </View>
                        <View style={{
                            flexDirection:'row',
                            justifyContent:'space-between',
                            alignItems:'center',
                            paddingHorizontal:12,
                            paddingVertical:15
                        }}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <TouchableOpacity onPress={() => setLike(!like)}>
                                    <AntDesign name={like ? 'heart' : 'hearto'} style={{paddingRight:10, fontSize:20, color:like ? 'red' : 'black'}} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionic name='ios-chatbubble-outline' style={{fontSize:20, paddingRight:10}} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => setPin(!pin)}>
                                <Feather name='bookmark' style={{fontSize:20, color:pin ? 'yellow' : 'black'}} />
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingHorizontal:15}}>
                            <Text>
                                Liked by {like ? 'you and ' : ''}
                                {like ? data.likes+1 : data.likes} others
                            </Text>
                            <Text style={{fontWeight:'700', fontSize:14, paddingVertical:2}}>
                                Đây là cmt nổi bật trong bài viết
                            </Text>
                            <Text style={{opacity:0.5, paddingVertical:2}}>
                                View all comments
                            </Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical:2}}>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <Image source={data.postPersonImage} style={{
                                        width:30,
                                        height:30,
                                        borderRadius:100,
                                        backgroundColor:'orange',
                                        marginRight:10
                                    }}/><TextInput placeholder='Add a comment ' style={{opacity:0.75, width:'75%', padding:2, paddingLeft:10, borderRadius:20, borderColor:'black', borderWidth:1}} />
                                    <Entypo name='emoji-happy' style={{fontSize:18, marginRight:8, marginLeft:8}} />
                                    <Feather name='navigation' style={{fontSize:20}} />
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })
        }
    </View>
  );
};


export default Post;
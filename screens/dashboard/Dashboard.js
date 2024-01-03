import {ScrollView, View} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import Header from '../../components/Header';
import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';
import Ionic from 'react-native-vector-icons/Ionicons'

const Dashboard = ({navigation}) => {
    return(
        <View style={{backgroundColor:'white', height:'100%'}}>
            <Header/>
            <ScrollView showsHorizontalScrollIndicator={false} style={{flex:1, backgroundColor:COLORS.white}}>
                <Stories/>
                <Post/>
                <View style={{
                    justifyContent:'center',
                    alignItems:'center',
                    padding:20
                }}>
                    <Ionic name='ios-reload-circle-sharp' style={{fontSize:60, opacity:0.3}} />
                </View>
            </ScrollView>
        </View>
        
    )
}

export default Dashboard
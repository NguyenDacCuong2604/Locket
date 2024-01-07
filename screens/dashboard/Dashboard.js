import {ScrollView, View} from 'react-native';
import React, { useContext, useEffect } from 'react';
import COLORS from '../../constants/colors';
import Header from '../../components/Header';
import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';
import Ionic from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../../context/AuthContext';

const Dashboard = ({navigation}) => {
    const {getAccountInfo, accountInfo} = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
              await getAccountInfo();
            } catch (error) {
              // Xử lý lỗi ở đây
              console.log(error);
            }
          };
        
          fetchData();
    }, [])

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
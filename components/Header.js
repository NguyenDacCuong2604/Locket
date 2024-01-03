import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

const Header = () => {
    const [fontsLoaded] = useFonts({
        'Lobster-Regular' : require('../assets/fonts/Lobster-Regular.ttf')
    })
      
    if (!fontsLoaded) {
        // Nếu fontsLoaded là false, font chưa được tải xong
        return <Text>Loading...</Text>;
    }

  return (
    <View
      style={{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 52,
        backgroundColor: 'white',
      }}>
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <Image
          style={{height: 28, width: 28, borderRadius:8, borderColor:'black', borderWidth:0.5}}
          source={require('../assets/locket.webp')}
        />
        <Text style={{fontFamily:'Lobster-Regular', fontSize:26, paddingLeft:8}}>Locket</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <View style={{position: 'relative'}}>
            <FontAwesome name='plus-square-o' style={{fontSize:24}}/>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
import React, { useContext, useState } from "react";
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet, Modal } from "react-native";
import Ionic from 'react-native-vector-icons/Ionicons'; 
import { AuthContext } from "../../context/AuthContext";

const UploadPost = ({route, navigation}) => {
    const {addPost} = useContext(AuthContext);

    const {urlImage} = route.params;
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Friend');
    const [selectedOptionIcon, setSelectedOptionIcon] = useState('people');
    const [caption, setCaption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setShowOptions(false);
    };

    const handleUpload =  async () => {
        await addPost(caption, selectedOption, urlImage);
        navigation.navigate("Dashboard");
    }

    return(
        <View style={{backgroundColor:'white', width:'100%', height:'100%'}}>
            <View
            style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
            }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{fontSize: 35, color:'black'}} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: 'bold', color:'black'}}>New Post</Text>
        <View style={{width:30}}></View>
        </View>
        <View style={{width:'100%', justifyContent:'center', alignItems:'center', backgroundColor:'white', padding:10}}>
            <Image source={{uri:urlImage}} style={{width:'70%',aspectRatio: 1, resizeMode: 'contain', justifyContent:'center', alignItems:'center'}}/>
        </View>
        <View style={{padding:20}}>
        <TextInput
            style={{borderRadius:4, padding:5, borderColor:'black', borderWidth:2}}
            placeholder="Write a caption..."
            onChangeText={text => setCaption(text)}
        />     
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>  
                <Text style={{borderRadius: 4,
                    padding: 5,
                    width:110,
                    justifyContent:'center',
                    alignItems:'center',
                    borderColor: 'black',
                    borderWidth: 1,
                    marginRight:5,
                    paddingLeft:30,
                    marginTop: 10,}}>
                      Mode:
                </Text>
                <TouchableOpacity onPress={() => setShowOptions(true)} style={styles.optionsButton}>
                    <Ionic name={selectedOptionIcon} style={{marginRight:4}}/>
                    <Text>{selectedOption}</Text>
                </TouchableOpacity> 
                </View> 
        </View>
        
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={handleUpload}>
                <Text style={{marginTop:30,backgroundColor:'#39B68D', fontSize:20, fontWeight:500, paddingHorizontal:60, paddingVertical:4, borderRadius:10}}>Share</Text>
                </TouchableOpacity>
            </View>
            
       

        {/* Modal hiển thị lựa chọn */}
        <Modal
                visible={showOptions}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setShowOptions(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={() => {setSelectedOptionIcon('lock-closed'); handleOptionSelect('Private');}} style={styles.optionItem}>
                            <Text>Private</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setSelectedOptionIcon('globe'); handleOptionSelect('Public');}} style={styles.optionItem}>
                            <Text>Public</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setSelectedOptionIcon('people'); handleOptionSelect('Friend');}} style={styles.optionItem}>
                            <Text>Friend</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    optionsButton: {
        flexDirection:'row',
        borderRadius: 4,
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10,
        width:250,
        justifyContent:'center',
        alignItems:'center'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
    },
    optionItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});
export default UploadPost;
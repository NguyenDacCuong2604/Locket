import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { StyleSheet } from 'react-native';
import { Entypo, Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import COLORS from '../../constants/colors';
const Home = ({ navigation }) => {
    const [type, setType] = useState(CameraType.back);
    const [flashMode, setFlashMode] = useState(FlashMode.off);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    useEffect(() => {
        const startCamera = async () => {
            const { status } = await requestPermission();
            if (status === 'granted') {
            } else {
                console.log('Camera permission denied');
            }
        };
        startCamera();
        return () => {
        };
    }, [requestPermission]);

    const toggleCameraType = () => setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));

    const toggleFlashMode = () => {
        setFlashMode(current => (current === FlashMode.off ? FlashMode.torch : FlashMode.off));
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            <View style={{ flex: 1, marginHorizontal: 22, flexDirection: 'column' }}>
                <View style={styles.top}>
                    <TouchableOpacity style={styles.btn}>
                        <Ionicons name="person-circle-outline" size={30} color={COLORS.white} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.btn, flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                        <Feather name="users" size={20} color={COLORS.white} />
                        <Text style={styles.text}>Friends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <AntDesign name="message1" size={30} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
                {/* camera */}
                <View style={styles.center}>
                    <Camera style={styles.camera} type={type}  flashMode={flashMode}/>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={[styles.btn, styles.no_padding]} onPress={toggleFlashMode}>
                        <Ionicons name="flash-outline" size={30} color={COLORS.white} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, styles.no_padding]}>
                        <Image style={{ width: 100, height: 100 }} source={require('../../assets/camera-take.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, styles.no_padding]} onPress={toggleCameraType}>
                        <Ionicons name="camera-reverse-outline" size={30} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.history}>
                    <Text style={styles.text}>History</Text>
                    <Entypo name="chevron-down" size={30} color={COLORS.white} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    top: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 8
    },
    btn: {
        padding: 5,
        borderRadius: 50,
        backgroundColor: 'gray'
    },
    no_padding: {
        padding: 0,
        backgroundColor: 'transparent'
    },
    center: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
        overflow: 'hidden',
    },

    bottom: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    history: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Home
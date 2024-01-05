import React, { useRef, useEffect } from "react";
import { Text, View, TouchableOpacity, Platform, Alert, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Ionic from 'react-native-vector-icons/Ionicons';
import ViewShot from "react-native-view-shot";
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';

const ShareProfile = ({ route, navigation }) => {
    const { link, name, accountName } = route.params;
    const viewShotRef = useRef();
    const requestMediaLibraryPermission = async () => {
        try {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status !== 'granted') {
                // Xử lý khi quyền truy cập bị từ chối
                console.log('Quyền truy cập thư viện đa phương tiện bị từ chối.');
            }
        } catch (error) {
            console.log('Lỗi khi yêu cầu quyền truy cập thư viện đa phương tiện:', error);
        }
    };
    useEffect(() => {
        requestMediaLibraryPermission();
    }, []);
    const captureAndSave = async () => {
        try {
            const uri = await viewShotRef.current.capture();
            // const asset = await MediaLibrary.createAssetAsync(uri);
            await MediaLibrary.saveToLibraryAsync(uri);
            Alert.alert('Success', 'QR Code image saved to gallery!');
        } catch (error) {
            Alert.alert('Error', 'Failed to save QR Code image.');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 10,
                }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionic name="close-outline" style={{ fontSize: 35 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Share Profile</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <Ionic name="checkmark" style={{ fontSize: 35, color: '#3493D9' }} />
                </TouchableOpacity>
            </View>
            <View style={styles.qrContainer}>
                <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 1 }}>
                    <QRCode value={link} size={280} logo={require('../../assets/locket.webp')} logoSize={50}/>
                </ViewShot>
                <Text style={{ fontSize: 30, fontWeight: 'bold'}}>
                        {name}
                    </Text>
                    <Text style={{ fontSize: 24, fontWeight: '700', opacity: 0.5 }}>
                        {accountName}
                    </Text>
            </View>
            <TouchableOpacity style={styles.downloadButton} onPress={captureAndSave}>
                <Text style={styles.buttonText}>Download QR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    qrContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100,
    },
    downloadButton: {
        backgroundColor: '#3493D9',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ShareProfile;
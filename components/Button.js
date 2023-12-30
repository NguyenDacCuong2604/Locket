import { Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}
            style={styles.button}>
            <Text style={{fontSize:20, fontWeight:700}}>Create an account</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        marginTop:24,
        width:'60%',
        backgroundColor: '#feb800',
        paddingBottom:16,
        paddingVertical:10,
        borderColor: COLORS.primary,
        borderWidth:1,
        borderRadius:26,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#feb800',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5
    }
})

export default Button
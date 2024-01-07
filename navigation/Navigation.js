import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Signup, Welcome, Dashboard, Status, EditProfile, ShareProfile, ChangePassword, UploadPost } from '../screens';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigation from '../navigation/BottomNavigation';
import { AuthContext} from '../context/AuthContext';
import SplashScreen from "../screens/SplashScreen";

const Navigation = () => {
    const Stack = createNativeStackNavigator();

    const {accessToken, splashLoading} = useContext(AuthContext);

    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator>
                    {splashLoading? (
                        <Stack.Screen name="Splash Screen" component={SplashScreen} options={{headerShown:false}} />
                    ) : accessToken ? (
                        <>
                        <Stack.Screen
                        name='Dashboard'
                        component={BottomNavigation}
                        options={{headerShown:false}}
                        />
                        <Stack.Screen
                        name='Status'
                        component={Status}
                        options={{headerShown:false}}
                        />
                        <Stack.Screen
                        name='EditProfile'
                        component={EditProfile}
                        options={{headerShown:false}}
                        />
                        <Stack.Screen
                        name='ShareProfile'
                        component={ShareProfile}
                        options={{headerShown:false}}
                        />
                        <Stack.Screen
                        name='ChangePassword'
                        component={ChangePassword}
                        options={{headerShown:false}}
                        />
                        <Stack.Screen
                        name='UploadPost'
                        component={UploadPost}
                        options={{headerShown:false}}
                        />
                        </>
                    ) : (
                        <>
                        <Stack.Screen 
                        name='Welcome'
                        component={Welcome}
                        options={{headerShown:false}}
                        />
                        <Stack.Screen
                        name='Login'
                        component={Login}
                        options={{headerShown:false}}
                        />
                        <Stack.Screen
                        name='Signup'
                        component={Signup}
                        options={{headerShown:false}}
                        />
                        </>
                    )}
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    )
}

export default Navigation;
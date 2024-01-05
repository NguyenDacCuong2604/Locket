import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Signup, Welcome, Dashboard, Status, EditProfile, ShareProfile } from './screens';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigation from './components/BottomNavigation';
import { AuthProvider } from './context/AuthContext';



const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <AuthProvider>
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
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
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    </AuthProvider>
  );
}


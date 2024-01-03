import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AddPost, Dashboard, Search, UserProfile, Activity } from '../screens';
import Ionic from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {

  return (
    <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarHideOnKeyboard: true,
              tabBarShowLabel: false,
              headerShown: false,
              tabBarStyle: {
                height: 50,
              },
    
              tabBarIcon: ({focused, size, colour}) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = focused ? 'home-sharp' : 'home-outline';
                  size = focused ? size + 8 : size + 2;
                } else if (route.name === 'Search') {
                  iconName = focused ? 'search' : 'ios-search-outline';
                  size = focused ? size + 8 : size + 2;
                } else if (route.name === 'AddPost') {
                  iconName = focused
                    ? 'add-circle'
                    : 'add-circle-outline';
                    size = focused ? size + 8 : size + 2;
                } else if (route.name === 'Activity') {
                  iconName = focused ? 'ios-heart' : 'ios-heart-outline';
                  size = focused ? size + 8 : size + 2;
                } else if (route.name === 'UserProfile') {
                  iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
                  size = focused ? size + 8 : size + 2;
                }
    
                return <Ionic name={iconName} size={size} color={colour} />;
              },
            })}>
            <Tab.Screen name="Home" component={Dashboard} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="AddPost" component={AddPost} />
            <Tab.Screen name="Activity" component={Activity} />
            <Tab.Screen name="UserProfile" component={UserProfile} />
          </Tab.Navigator>
  );
};

export default BottomNavigation;
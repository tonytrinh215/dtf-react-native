import { Platform, StyleSheet, View, Image, Text } from 'react-native';
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import HomeScreen from './HomeScreen';
import ContactScreen from './ContactScreen';
import BookingScreen from './BookingScreen';
import UserScreen from './UserScreen';

const Tab = createBottomTabNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#046565' },
    headerTitleAlign: 'center'
}

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: 'Home',
                    headerLeft: () => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}



const Main = () => {
    return (
            <Tab.Navigator>
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                />
                <Tab.Screen
                    name='Booking'
                    component={BookingScreen}
                />
                <Tab.Screen
                    name='Contact'
                    component={ContactScreen}
                />
                <Tab.Screen
                    name='My Profile'
                    component={UserScreen}
                />
            </Tab.Navigator>
    )
}

export default Main;
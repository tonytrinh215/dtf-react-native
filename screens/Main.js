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
import ServicesScreen from './ServicesScreen';

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
                    title: 'DTF'
                })}
            />
            <Stack.Screen
                name='Services'
                component={ServicesScreen}
                options={({ route }) => ({
                    title: route.params.category + ' Services'
                })}
            />
        </Stack.Navigator>
    )
}

const BookingNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Booking'
                component={BookingScreen}
                options={({ navigation }) => ({
                    title: 'Booking'
                })}
            />
        </Stack.Navigator>
    )
}

const ContactNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Contact'
                component={ContactScreen}
                options={({ navigation }) => ({
                    title: 'Contact Us'
                })}
            />
        </Stack.Navigator>
    )
}
const UserNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='User'
                component={UserScreen}
                options={({ navigation }) => ({
                    title: 'My Profile'
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
                    component={HomeNavigator}
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name='Booking'
                    component={BookingNavigator}
                    options={{
                        title: 'Booking',
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name='list'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name='Contact'
                    component={ContactNavigator}
                    options={{
                        title: 'Contact',
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name='address-card'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name='My Profile'
                    component={UserNavigator}
                    options={{
                        title: 'My Profile',
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name='user'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
    )
}

export default Main;
import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeRoute from '../routes/HomeRoute';
import SearchRoute from '../routes/SearchRoute';
import NotificationRoute from '../routes/NotificationRoute';
import ProfileRoute from '../routes/ProfileRoute';

const TabNavigation = createBottomTabNavigator({
    Home: {
        screen: HomeRoute,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={30} color={'black'} />
            )
        }
    },
    Search: {
        screen: SearchRoute,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <Ionicons name={focused ? 'ios-search' : 'ios-search-outline'} size={30} color={'black'} />
            )
        }
    },
    AddPhoto: {
        screen: View,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: () => (
                <Ionicons name='ios-add-circle-outline' size={30} color={'black'} />
            ),
            tabBarOnPress: () => {
                navigation.navigate('TakePhoto')
            }
        })
    },
    Notification: {
        screen: NotificationRoute,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <Ionicons name={focused ? 'ios-heart' : 'ios-heart-outline'} size={30} color={'black'} />
            )
        }
    },
    Profile: {
        screen: ProfileRoute,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <Ionicons name={focused ? 'ios-person' : 'ios-person-outline'} size={30} color={'black'} />
            )
        }
    }
},
{
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: false,
        style: {
            backgroundColor: '#ffffff',
            height: 50
        }
    }
});

export default TabNavigation;
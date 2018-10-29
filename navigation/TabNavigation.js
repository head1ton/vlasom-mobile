import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeRoute from '../routes/HomeRoute';
import SearchRoute from '../routes/SearchRoute';
import InterestListRoute from '../routes/InterestListRoute';
import ProfileRoute from '../routes/ProfileRoute';

const TabNavigation = createBottomTabNavigator({
    Home: {
        screen: HomeRoute,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={30} color={'white'} />
            )
        }
    },
    Search: {
        screen: SearchRoute,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <Ionicons name={focused ? 'ios-search' : 'ios-search-outline'} size={30} color={'white'} />
            )
        }
    },
    AddPhoto: {
        screen: View,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: () => (
                <Ionicons name='ios-add-circle-outline' size={30} color={'white'} />
            ),
            tabBarOnPress: () => {
                navigation.navigate('TakePhoto')
            }
        })
    },
    InterestList: {
        screen: InterestListRoute,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <Ionicons name={focused ? 'ios-heart' : 'ios-heart-outline'} size={30} color={'white'} />
            )
        }
    },
    Profile: {
        screen: ProfileRoute,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <Ionicons name={focused ? 'ios-person' : 'ios-person-outline'} size={30} color={'white'} />
            )
        }
    }
},
{
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: false,
        style: {
            backgroundColor: '#d5426a',
            height: 50
        }
    }
});

export default TabNavigation;
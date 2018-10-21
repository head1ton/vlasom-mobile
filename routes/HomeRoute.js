import React from 'react';
import { createStackNavigator } from 'react-navigation';
import FeedScreen from '../screens/FeedScreen';
import sharedRoutes, { sharedOptions } from './sharedRoutes';
import { Image } from 'react-native';
import NavButton from '../components/NavButton';

const HomeRoute = createStackNavigator({
    Home: {
        screen: FeedScreen,
        navigationOptions: ({navigation}) => ({
            headerTitle: (
                <Image source={require('../assets/images/logo-text-white.png')} style={{height: 40}} resizeMode={'contain'} />
            ),
            headerLeft: (
                <NavButton iconName={'ios-camera-outline'} onPress={() => navigation.navigate('TakePhoto')} color={'white'} />
            )
        })
    },
    ...sharedRoutes
},
{
    ...sharedOptions
});

export default HomeRoute;
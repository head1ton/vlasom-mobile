import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ProfileScreen from '../screens/ProfileScreen';
import sharedRoutes, { sharedOptions } from './sharedRoutes';
import NavButton from '../components/NavButton';

const ProfileRoute = createStackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: ({screenProps, navigation}) => ({
            headerTitle: screenProps.nickname,
            headerRight: (
                <NavButton iconName={'ios-menu'} onPress={() => navigation.navigate('Menu')} color={'white'} />
            )
        })
    },
    ...sharedRoutes
},
{
    ...sharedOptions
});

export default ProfileRoute;
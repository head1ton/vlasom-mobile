import React from 'react';
import NavButton from '../components/NavButton';
import { createStackNavigator } from 'react-navigation';
import TakePhotoScreen from '../screens/TakePhotoScreen';
import TabNavigation from './TabNavigation';
import UploadPhotoScreen from './../screens/UploadPhotoScreen';
import AddPhotoNavigation from './AddPhotoNavigation';

const RootNavigation = createStackNavigator({
    Tabs: {
        screen: TabNavigation,
        navigationOptions: {
            header: null
        }
    },
    TakePhoto: {
        screen: AddPhotoNavigation,
        navigationOptions: {
            header: null
        }
    },
    UploadPhoto: {
        screen: UploadPhotoScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Upload',
            headerLeft: <NavButton iconName={"ios-arrow-back"} color={'white'} onPress={() => navigation.goBack(null)} />,
            headerStyle: {
                backgroundColor: '#d5426a',
            },
            headerTitleStyle: {
                color: 'white'
            }
        })
    }
},
{
    mode: 'modal'
});

export default RootNavigation;        
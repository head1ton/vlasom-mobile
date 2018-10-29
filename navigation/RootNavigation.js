import React from 'react';
import NavButton from '../components/NavButton';
import { createStackNavigator } from 'react-navigation';
import TakePhotoScreen from '../screens/TakePhotoScreen';
import TabNavigation from './TabNavigation';
import UploadPhotoScreen from './../screens/UploadPhotoScreen';
import MenuScreen from '../screens/MenuScreen';
import AddPhotoNavigation from './AddPhotoNavigation';
import TakeOnlyNavigation from './TakeOnlyNavigation';

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
    },
    TakePhotoOnly: {
        screen: TakeOnlyNavigation,
        navigationOptions: {
            header: null
        }
    },
    Menu: {
        screen: MenuScreen,
        navigationOptions: {
            title: 'Menu',
            headerLeft: props => <NavButton {...props} iconName={"ios-arrow-back"} color={'white'} />,
            headerStyle: {
                backgroundColor: '#d5426a',
            },
            headerTitleStyle: {
                color: 'white'
            }
        }
    }
},
{
    mode: 'modal'
});

export default RootNavigation;        
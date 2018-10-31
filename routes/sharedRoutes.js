import React from 'react';
import LikeScreen from '../screens/LikeScreen';
import CommentScreen from '../screens/CommentScreen';
import ProfileDetailScreen from '../screens/ProfileDetailScreen';
import PhotoScreen from '../screens/PhotoScreen';
import NavButton from '../components/NavButton';
import MenuScreen from '../screens/MenuScreen';
import UploadListScreen from '../screens/UploadListScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CategoryListScreen from '../screens/CategoryListScreen';

const sharedRoutes = {
    Likes: {
        screen: LikeScreen,
        navigationOptions: {
            headerTitle: 'Likes'
        }
    },
    Comments: {
        screen: CommentScreen,
        navigationOptions: {
            headerTitle: 'Comments'
        }
    },
    ProfileDetail: {
        screen: ProfileDetailScreen
    },
    Photo: {
        screen : PhotoScreen,
        navigationOptions: {
            headerTitle: 'Photo'
        }
    },
    Menu: {
        screen: MenuScreen,
        navigationOptions: {
            headerTitle: 'Menu'
        }
    },
    UploadList: {
        screen: UploadListScreen,
        navigationOptions: {
            headerTitle: 'Uploaded'
        }
    },
    Notification: {
        screen: NotificationScreen,
        navigationOptions: {
            headerTitle: 'Notifications'
        }
    },
    CategoryList: {
        screen: CategoryListScreen
    }
};

const sharedOptions = {
    navigationOptions: ({navigation}) => ({
        headerLeft: props => <NavButton {...props} iconName={"ios-arrow-back"} color={'white'} />,
        headerRight: (
            <NavButton iconName={'ios-menu'} onPress={() => navigation.navigate('Menu')} color={'white'} />
        ),
        headerStyle: {
            backgroundColor: '#d5426a',
        },
        headerTitleStyle: {
            color: 'white'
        }
    })
};

export { sharedOptions };

export default sharedRoutes;
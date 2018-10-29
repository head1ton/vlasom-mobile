import React from 'react';
import LikeScreen from '../screens/LikeScreen';
import CommentScreen from '../screens/CommentScreen';
import ProfileDetailScreen from '../screens/ProfileDetailScreen';
import PhotoScreen from '../screens/PhotoScreen';
import NavButton from '../components/NavButton';
import MenuScreen from '../screens/MenuScreen';

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
};

const sharedOptions = {
    navigationOptions: {
        headerLeft: props => <NavButton {...props} iconName={"ios-arrow-back"} color={'white'} />,
        headerStyle: {
            backgroundColor: '#d5426a',
        },
        headerTitleStyle: {
            color: 'white'
        }
    }
};

export { sharedOptions };

export default sharedRoutes;
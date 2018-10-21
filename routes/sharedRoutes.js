import React from 'react';
import LikeScreen from '../screens/LikeScreen';
import CommentScreen from '../screens/CommentScreen';
import NavButton from '../components/NavButton';

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
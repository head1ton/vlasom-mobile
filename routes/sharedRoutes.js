import React from 'react';
import LikeScreen from '../screens/LikeScreen';
import CommentScreen from '../screens/CommentScreen';
import NavButton from '../components/NavButton';

const sharedRoutes = {
    Like: {
        screen: LikeScreen
    },
    Comment: {
        screen: CommentScreen
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
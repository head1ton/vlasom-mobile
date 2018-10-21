import LikeScreen from '../screens/LikeScreen';
import CommentScreen from '../screens/CommentScreen';

const sharedRoutes = {
    Like: {
        screen: LikeScreen
    },
    Comment: {
        screen: CommentScreen
    }
}

const sharedOptions = {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#ffffff'
        }
    }
}

export { sharedOptions };

export default sharedRoutes;
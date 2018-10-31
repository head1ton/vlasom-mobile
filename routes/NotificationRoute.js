import { createStackNavigator } from 'react-navigation';
import NotificationScreen from '../screens/NotificationScreen';
import sharedRoutes, { sharedOptions } from './sharedRoutes';

const NotificationRoute = createStackNavigator({
    Notification: {
        screen: NotificationScreen,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Notifications',
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

export default NotificationRoute;
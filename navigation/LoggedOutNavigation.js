import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';

const LoggedOutNavigation = createStackNavigator({
    Login: {
        screen: LoginScreen
    }
})

export default LoggedOutNavigation;
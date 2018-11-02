import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const LoggedOutNavigation = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    Signup: {
        screen: SignupScreen
    }
})

export default LoggedOutNavigation;
import { createMaterialTopTabNavigator } from 'react-navigation';
import TakeOnlyCameraScreen from '../screens/TakeOnlyCameraScreen';
import InterestPhotoListScreen from '../screens/InterestPhotoListScreen';

const TakeOnlyNavigation = createMaterialTopTabNavigator(
    {
        TakeOnly: {
            screen: TakeOnlyCameraScreen,
            navigationOptions: {
                tabBarLabel: 'Photo'
            }
        },
        InterestPhotoList: {
            screen: InterestPhotoListScreen,
            navigationOptions: {
                tabBarLabel: 'Interest'
            }
        }
    },
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            showLabel: true,
            upperCaseLabel: true,
            activeTintColor: 'white',
            inactiveTintColor: '#c0c1c2',
            style: {
                backgroundColor: '#d5426a'
            },
            labelStyle: {
                fontSize: 14,
                fontWeight: '600'
            },
            showIcon: false
        }
    }
)

export default TakeOnlyNavigation;
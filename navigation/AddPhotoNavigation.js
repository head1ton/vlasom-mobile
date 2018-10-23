import { createMaterialTopTabNavigator } from 'react-navigation';
import CameraScreen from '../screens/CameraScreen';
import LibraryScreen from '../screens/LibraryScreen';

const AddPhotoNavigation = createMaterialTopTabNavigator(
    {
        Camera: {
            screen: CameraScreen,
            navigationOptions: {
                tabBarLabel: 'Photo'
            }
        },
        Library: {
            screen: LibraryScreen,
            navigationOptions: {
                tabBarLabel: 'Library'
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

export default AddPhotoNavigation;
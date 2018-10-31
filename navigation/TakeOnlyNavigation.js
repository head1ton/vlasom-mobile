import { createMaterialTopTabNavigator } from 'react-navigation';
import TakeOnlyCameraScreen from '../screens/TakeOnlyCameraScreen';
import InterestPhotoListScreen from '../screens/InterestPhotoListScreen';
import CouplePhotoListScreen from '../screens/CouplePhotoListScreen';
import SoloPhotoListScreen from '../screens/SoloPhotoListScreen';
import FamilyPhotoListScreen from '../screens/FamilyPhotoListScreen';
import GroupPhotoListScreen from '../screens/GroupPhotoListScreen';
import FriendPhotoListScreen from '../screens/FriendPhotoListScreen';

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
        },
        CouplePhotoList: {
            screen: CouplePhotoListScreen,
            navigationOptions: {
                tabBarLabel: '커플사진'
            }
        },
        SoloPhotoList: {
            screen: SoloPhotoListScreen,
            navigationOptions: {
                tabBarLabel: '단독사진'
            }
        },
        FamilyPhotoList: {
            screen: FamilyPhotoListScreen,
            navigationOptions: {
                tabBarLabel: '가족사진'
            }
        },
        GroupPhotoList: {
            screen: GroupPhotoListScreen,
            navigationOptions: {
                tabBarLabel: '단체사진'
            }
        },
        FriendPhotoList: {
            screen: FriendPhotoListScreen,
            navigationOptions: {
                tabBarLabel: '우정사진'
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
            showIcon: false,
            scrollEnabled: true
        }
    }
)

export default TakeOnlyNavigation;
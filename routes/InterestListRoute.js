import { createStackNavigator } from 'react-navigation';
import InterestListScreen from '../screens/InterestListScreen';
import sharedRoutes, { sharedOptions } from './sharedRoutes';

const InterestListRoute = createStackNavigator({
    InterestList: {
        screen: InterestListScreen,
        navigationOptions: {
            headerTitle: 'Interest'
        }
    },
    ...sharedRoutes
},
{
    ...sharedOptions
});

export default InterestListRoute;
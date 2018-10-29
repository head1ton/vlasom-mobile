import React from 'react';
import { createStackNavigator } from 'react-navigation';
import InterestListScreen from '../screens/InterestListScreen';
import sharedRoutes, { sharedOptions } from './sharedRoutes';
import NavButton from '../components/NavButton';

const InterestListRoute = createStackNavigator({
    InterestList: {
        screen: InterestListScreen,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Interest',
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

export default InterestListRoute;
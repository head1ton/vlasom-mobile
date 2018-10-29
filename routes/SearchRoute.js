import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SearchScreen from '../screens/SearchScreen';
import sharedRoutes, { sharedOptions } from './sharedRoutes';
import NavButton from '../components/NavButton';

const SearchRoute = createStackNavigator({
    Search: {
        screen: SearchScreen,
        navigationOptions: ({navigation}) => ({
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

export default SearchRoute;
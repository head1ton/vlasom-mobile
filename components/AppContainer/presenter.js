import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import LoggedOutNavigation from '../../navigation/LoggedOutNavigation';
import RootNavigation from '../../navigation/RootNavigation';

class AppContainer extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
        initApp: PropTypes.func.isRequired
    };

    render(){
        const { isLoggedIn, loginUser } = this.props;
        return(
        <View style={styles.container}>
        <StatusBar hidden={false} />
            {isLoggedIn && loginUser ? 
            <RootNavigation screenProps={{nickname: loginUser.nickname}} />
             : 
             <LoggedOutNavigation />}
        </View>)
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default AppContainer;
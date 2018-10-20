import React, { Component } from 'react';
import LoginScreen from './presenter';

class Container extends Component{
    static navigationOptions = ({navigation}) => ({
        title: 'Login'
    })
    render(){
        return <LoginScreen />
    }
};

export default Container;
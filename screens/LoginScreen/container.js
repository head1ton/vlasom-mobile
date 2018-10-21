import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import LoginScreen from './presenter';

class Container extends Component{
    state = {
        username: "",
        password: "",
        isSubmitting: false
    }

    static propTypes = {
        usernameLogin: PropTypes.func.isRequired,
        facebookLogin: PropTypes.func.isRequired
    }

    static navigationOptions = ({navigation}) => ({
        header: null
    })
    render(){
        return <LoginScreen {...this.state} changeUsername={this._changeUsername} changePassword={this._changePassword} submit={this._submit} facebookLogin={this._handleFBLogin} />
    }

    _changeUsername = (text) => {
        this.setState(
            {username: text}
        )
    }

    _changePassword = (text) => {
        this.setState({
            password: text
        })
    }

    _submit = async() => {
        const { username, password, isSubmitting } = this.state;
        const { usernameLogin } = this.props;
        if(!isSubmitting){
            if(username && password){
                this.setState({
                    isSubmitting: true
                })
                const loginResult = await usernameLogin(username, password);
                if(!loginResult){
                    Alert.alert('아이디와 비밀번호를 확인해주세요.');
                    this.setState({
                        isSubmitting: false
                    })
                }
            }
            else{
                Alert.alert('아이디와 비밀번호를 입력해주세요.')
            }
        }
    }

    _handleFBLogin = async () => {
        const { facebookLogin } = this.props;
        this.setState({
            isSubmitting: true
        })
        const facebookResult = await facebookLogin();
        if(!facebookResult){
            this.setState({
                isSubmitting: false
            })
        }
    }
};

export default Container;
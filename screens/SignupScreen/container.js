import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import SignupScreen from './presenter';

class Container extends Component{
    state = {
        username: "",
        password1: "",
        password2: "",
        email: "",
        isSubmitting: false,
        checkUsername: false,
        checkEmail: false,
        isCheckingUsername: false,
        isCheckingEmail: false
    }

    static propTypes = {
        createAccount: PropTypes.func.isRequired,
        doCheckEmail: PropTypes.func.isRequired,
        doCheckUsername: PropTypes.func.isRequired
    }

    static navigationOptions = ({navigation}) => ({
        header: null
    })

    render(){
        return(
            <SignupScreen 
            changeUsername={this._changeUsername} 
            changePassword1={this._changePassword1} 
            changePassword2={this._changePassword2} 
            changeEmail={this._changeEmail} 
            checkUsernameFunc={this._checkUsernameFunc} 
            checkEmailFunc={this._checkEmailFunc} 
            submit={this._submit} 
            handleLogin={this._handleLogin} 
            {...this.state}
            />
        )
    }

    _changeUsername = (text) => {
        this.setState(
            {username: text}
        )
    }

    _changePassword1 = (text) => {
        this.setState({
            password1: text
        })
    }

    _changePassword2 = (text) => {
        this.setState({
            password2: text
        })
    }

    _changeEmail = (text) => {
        this.setState({
            email: text
        })
    }

    _checkUsernameFunc = async() => {
        const { doCheckUsername } = this.props;
        const { username, isCheckingUsername } = this.state;
        this.setState({
            isCheckingUsername: true
        })
        const checkResult = await doCheckUsername(username);
        if(checkResult){
            this.setState({
                checkUsername: true,
                isCheckingUsername: false
            })
        }
        else{
            this.setState({
                checkUsername: false,
                isCheckingUsername: false
            })
            Alert.alert('아이디가 중복되거나 입력되지 않았습니다.')
        }
    }

    _checkEmailFunc = async() => {
        const { doCheckEmail } = this.props;
        const { email, isCheckingEmail } = this.state;
        this.setState({
            isCheckingEmail: true
        })
        const checkResult = await doCheckEmail(email);
        if(checkResult){
            this.setState({
                checkEmail: true,
                isCheckingEmail: false,
            })
        }
        else{
            this.setState({
                checkEmail: false,
                isCheckingEmail: false
            })
            Alert.alert('이메일이 중복되거나 올바른 형식이 아닙니다.')
        }
    }

    _submit = async() => {
        const { username, password1, password2, email, isSubmitting, checkUsername, checkEmail } = this.state;
        const { createAccount } = this.props;
        const nickname = username;
        if(!isSubmitting){
            if(username && password1 && password2 && email){
                if(password1 === password2){
                    if(checkUsername && checkEmail){
                        this.setState({
                            isSubmitting: true
                        })
                        const signupResult = await createAccount(username, password2, email, nickname);
                        if(!signupResult){
                            Alert.alert('입력하신 정보를 확인해주세요.');
                            this.setState({
                                isSubmitting: false,
                                checkUsername: false,
                                checkEmail: false
                            })
                        }
                    }
                    else{
                        Alert.alert('중복검사를 해주세요.')
                    }
                }
                else{
                    Alert.alert('비밀번호가 일치하지 않습니다.')
                }
            }
            else{
                Alert.alert('회원정보를 입력해주세요.')
            }
        }
    }

    _handleLogin= () => {
        const { navigation : { navigate } } = this.props;
        navigate('Login');
    }
}

export default Container;
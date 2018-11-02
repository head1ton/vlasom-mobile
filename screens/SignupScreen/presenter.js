import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, TextInput, StatusBar, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

const SignupScreen = props => (
    <View style={styles.container}>
    <StatusBar barStyle={'light-content'} />
        <View style={styles.header}>
            <Image source={require("../../assets/images/logo-large-red.png")} resizeMode='center' style={styles.logo} />
        </View>
        <View style={styles.content}>
            <View style={styles.row}>
                <TextInput 
                placeholder="username" 
                style={styles.textInputSm} 
                underlineColorAndroid={'transparent'} 
                autoCapitalize={'none'} 
                autoCorrect={false} 
                value={props.username} 
                onChangeText={props.changeUsername} 
                returnKeyType={'next'} 
                />
                <TouchableOpacity onPressOut={props.checkUsernameFunc}>
                    <View style={props.checkUsername ? styles.approved : styles.denied}>
                    {props.isCheckingUsername ? (
                        <ActivityIndicator size='small' color='white' />
                    ):(
                        <Ionicons name={props.checkUsername ? 'ios-checkmark-circle-outline' : 'ios-checkmark'} size={22} color="#fff" />
                    )}
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TextInput 
                placeholder='password' 
                style={styles.textInput} 
                underlineColorAndroid={'transparent'} 
                secureTextEntry={true} 
                autoCorrect={false} 
                value={props.password1} 
                onChangeText={props.changePassword1} 
                returnKeyType={'next'} 
                />
            </View>
            <View style={styles.row}>
                <TextInput 
                placeholder='password confirm' 
                style={styles.textInput} 
                underlineColorAndroid={'transparent'} 
                secureTextEntry={true} 
                autoCorrect={false} 
                value={props.password2} 
                onChangeText={props.changePassword2} 
                returnKeyType={'next'} 
                />
            </View>
            <View style={styles.row}>
                <TextInput 
                placeholder='e-mail' 
                style={styles.textInputSm} 
                underlineColorAndroid={'transparent'} 
                autoCorrect={false} 
                value={props.email} 
                onChangeText={props.changeEmail} 
                />
                <TouchableOpacity onPressOut={props.checkEmailFunc}>
                    <View style={props.checkEmail ? styles.approved : styles.denied}>
                    {props.isCheckingEmail ? (
                        <ActivityIndicator size='small' color='white' />
                    ):(
                        <Ionicons name={props.checkEmail ? 'ios-checkmark-circle-outline' : 'ios-checkmark'} size={22} color="#fff" />
                    )}
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.touchable} onPressOut={props.submit}>
                <View style={styles.btn}>
                    {props.isSubmitting ? <ActivityIndicator size='small' color='white' /> : <Text style={styles.btnText}>SignUp</Text>}
                </View>
            </TouchableOpacity>
            <View style={styles.row}>
                <TouchableOpacity style={styles.column} onPressOut={props.handleLogin}>
                    <View style={styles.textCenter}>
                        <Text style={styles.authText}>로그인</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

SignupScreen.propTypes = {
    username: PropTypes.string.isRequired,
    password1: PropTypes.string.isRequired,
    password2: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    checkUsername: PropTypes.bool.isRequired,
    checkEmail: PropTypes.bool.isRequired,
    changeUsername: PropTypes.func.isRequired,
    changePassword1: PropTypes.func.isRequired,
    changePassword2: PropTypes.func.isRequired,
    changeEmail: PropTypes.func.isRequired,
    checkUsernameFunc: PropTypes.func.isRequired,
    checkEmailFunc: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
    isCheckingUsername: PropTypes.bool.isRequired,
    isCheckingEmail: PropTypes.bool.isRequired
}

const styles =StyleSheet.create({
    container: {
        flex: 1
    },
    header:{
        flex: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: width
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 100
    },
    content: {
        flex: 5,
        backgroundColor: 'white',
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    fbContainer: {
        marginTop: 30,
        paddingVertical: 20,
        borderTopColor: '#d5264a',
        borderBottomColor: '#d5264a',
        borderTopWidth: 2,
        borderBottomWidth: 2
    },
    fbView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    fbText: {
        color: '#d5264a',
        marginLeft: 10,
        fontWeight: '600',
        fontSize: 14
    },
    textInput: {
        height: 50,
        borderColor: '#d5264a',
        borderWidth: 2,
        width: width - 80,
        marginBottom: 20,
        borderRadius: 5,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        fontSize: 14
    },
    textInputSm: {
        height: 50,
        borderColor: '#d5264a',
        borderWidth: 2,
        width: width - 140,
        marginBottom: 20,
        borderRadius: 5,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        fontSize: 14
    },
    touchable: {
        borderRadius: 5,
        backgroundColor: '#d5264a',
        width: width - 80
    },
    btn: {
        paddingHorizontal: 10,
        height: 50,
        justifyContent: 'center'
    },
    btnText: {
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 16
    },
    row: {
        flexDirection: 'row',
        width: width - 80
    },
    column: {
        flexDirection: 'column',
        flex: 1
    },
    authText: {
        textAlign: 'center',
        marginTop: 10
    },
    approved: {
        width: 60,
        height: 50,
        backgroundColor: '#d5426a',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
    ,
    denied: {
        width: 60,
        height: 50,
        backgroundColor: '#c0c1c2',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SignupScreen;
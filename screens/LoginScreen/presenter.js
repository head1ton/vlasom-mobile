import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

const LoginScreen = props => (
    <View style={styles.container}>
    <StatusBar barStyle={'light-content'} />
        <View style={styles.header}>
            <Image source={require("../../assets/images/logo-large-red.png")} resizeMode="stretch" style={styles.logo} />
        </View>
        <View style={styles.content}>
            <TextInput placeholder="username" style={styles.textInput} underlineColorAndroid={'transparent'} autoCapitalize={'none'} autoCorrect={false} />
            <TextInput placeholder='password' style={styles.textInput} underlineColorAndroid={'transparent'} secureTextEntry={true} autoCorrect={false} />
            <TouchableOpacity style={styles.touchable}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Login</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.row}>
                <TouchableOpacity style={styles.column}>
                    <View style={styles.textCenter}>
                        <Text style={styles.authText}>회원가입</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.column}>
                    <View style={styles.row}>
                        <TouchableOpacity>
                            <View>
                                <Text style={styles.authText}>아이디</Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.authText}>/</Text>
                        </View>
                        <TouchableOpacity>
                            <View>
                                <Text style={styles.authText}>비밀번호</Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.authText}>찾기</Text>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.fbContainer}>
                <View style={styles.fbView}>
                    <Ionicons name='logo-facebook' size={22} color="#d5264a" />
                    <Text style={styles.fbText}>Login with Facebook</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
);

const styles =StyleSheet.create({
    container: {
        flex: 1
    },
    header:{
        flex: 4,
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
        paddingTop: 50,
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
    }
})

export default LoginScreen;
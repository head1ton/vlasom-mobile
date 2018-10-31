import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, CameraRoll, StatusBar, Image, ImageBackground } from 'react-native';
import { Camera, Permissions } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import FitImage from 'react-native-fit-image';

class TakeOnlyCameraScreen extends Component{
    constructor(props){
        super(props);
        const { navigation : { state : { params : { url } } } } = props;
        this.state = {
            hasCameraPermissions: null,
            type: Camera.Constants.Type.back,
            flash: Camera.Constants.FlashMode.off,
            pictureTaken: false,
            picture: null,
            url: url
        }
    }

    componentWillMount = async() => {
        
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const cameraRoll = await Permissions.askAsync(Permissions.CAMERA_ROLL);
       
        this.setState({
            hasCameraPermissions: camera.status === 'granted' && cameraRoll.status === 'granted' ? true : false
        })
        
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.navigation.state.params.url){
            const { navigation : { state : { params : { url } } } } = this.props;
            this.setState({
                url
            })
        }
    }

    render(){
        const { hasCameraPermissions, type, flash, pictureTaken, picture, url } = this.state;
        console.log(url)
        if(hasCameraPermissions === null){
            return <View />;
        }
        else if(hasCameraPermissions === false){
            return <Text>카메라에 접근할 수 없습니다.</Text>
        }
        else{
            return (
                <View style={styles.container}>
                <StatusBar hidden={true} />
                    {pictureTaken ? (
                        <View style={{flex: 4}}>
                            <FitImage 
                                source={{uri: picture}} 
                                style={{flex: 1}}
                            />
                        </View>
                    ) : 
                    (   <View style={styles.cameraContainer}>
                        <Camera
                        type={type} 
                        flashMode={flash} 
                        ref={camera => (this.camera = camera)} 
                        style={styles.camera}
                        >
                            <TouchableOpacity onPressOut={this._changeType}>
                                <View style={styles.action}>
                                    <MaterialIcons name={type === Camera.Constants.Type.back ? 'camera-front' : 'camera-rear'} color='white' size={40} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPressOut={this._changeFlash}>
                                <View style={styles.action}>
                                    {flash === Camera.Constants.FlashMode.off && <MaterialIcons name={'flash-off'} color='white' size={40} />}
                                    {flash === Camera.Constants.FlashMode.on && <MaterialIcons name={'flash-on'} color='white' size={40} />}
                                    {flash === Camera.Constants.FlashMode.auto && <MaterialIcons name={'flash-auto'} color='white' size={40} />}
                                </View>
                            </TouchableOpacity>
                        </Camera>
                        {url !== '' && (
                            <View style={styles.overlay}>
                                <FitImage source={{uri: url}} style={styles.overlayImage} />
                            </View>
                        )}
                        </View>
                    )}
                    <View style={styles.btnContainer}>
                        {pictureTaken ? (
                        <View style={styles.photoActions}>
                            <TouchableOpacity onPressOut={this._rejectPhoto}>
                                <MaterialIcons name={'close'} size={60} color={'black'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPressOut={this._appovePhoto}>
                                <MaterialIcons name={'check'} size={60} color={'black'} />
                            </TouchableOpacity>
                        </View>
                        ) : (
                        <TouchableOpacity onPressOut={this._takePhoto}>
                            <View style={styles.btn}></View>
                        </TouchableOpacity>
                        )}
                    </View>
                </View>
            )
        }
    }

    _changeType = () => {
        this.setState(prevState => {
            if(prevState.type === Camera.Constants.Type.back){
                return {type: Camera.Constants.Type.front}
            }
            else{
                return {type: Camera.Constants.Type.back}
            }
        })
    }

    _changeFlash = () => {
        this.setState(prevState => {
            if(prevState.flash === Camera.Constants.FlashMode.off){
                return {flash: Camera.Constants.FlashMode.on}
            }
            else if(prevState.flash === Camera.Constants.FlashMode.on){
                return {flash: Camera.Constants.FlashMode.auto}
            }
            else if(prevState.flash === Camera.Constants.FlashMode.auto){
                return {flash: Camera.Constants.FlashMode.off}
            }
        })
    }

    _takePhoto = async () => {
        const { pictureTaken } = this.state;
        if(!pictureTaken){
            if(this.camera){
                const takenPhoto = await this.camera.takePictureAsync({
                    quality: 1,
                    exif: true
                })
                this.setState({
                    picture: takenPhoto.uri,
                    pictureTaken: true
                })
            }
        }
    }

    _rejectPhoto = () => {
        this.setState({
            picture: null,
            pictureTaken: false
        })
    }

    _appovePhoto = async () => {
        const { picture } = this.state;
        const { navigation : { navigate } } = this.props;
        const saveResult = await CameraRoll.saveToCameraRoll(picture, 'photo');
        navigate('UploadPhoto', {url: picture});
        this.setState({
            picture: null,
            pictureTaken: false
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    cameraContainer: {
        flex: 4
    },
    camera: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0.7,
        width: '100%',
        height: '100%'
    },
    overlayImage: {
        opacity: 0.7,
        width: '100%',
        height: '100%'
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderColor: '#c0c1c2',
        borderWidth: 10,
        borderRadius: 30
    },
    action: {
        backgroundColor: 'transparent',
        height: 40,
        width: 40,
        margin: 10
    },
    photoActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        alignItems: 'center',
        width: 250
    }
})

export default TakeOnlyCameraScreen;
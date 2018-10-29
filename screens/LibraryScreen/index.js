import React, { Component } from 'react';
import { CameraRoll } from 'react-native';
import LibraryScreen from './presenter';

class Container extends Component{
    state = {
        photos: null,
        pickedPhoto: null
    }
    
    componentWillMount = async() => {
        const cameraPhotos = await CameraRoll.getPhotos({
            first: 200,
            assetType: 'Photos'
        });
        this.setState({
            photos: cameraPhotos.edges,
            pickedPhoto: cameraPhotos.edges[0]
        })
    }
    
    render(){
        return (
            <LibraryScreen {...this.state} pickPhoto={this._pickPhoto} approvePhoto={this._approvePhoto} withPhoto={this._withPhoto} />
        )
    }

    _pickPhoto =(photo) => {
        this.setState({
            pickedPhoto: photo
        })
    }

    _approvePhoto = () => {
        const { pickedPhoto } = this.state;
        const { navigation : { navigate } } = this.props;
        navigate('UploadPhoto', {url: pickedPhoto.node.image.uri})
    }

    _withPhoto = () => {
        const { pickedPhoto } = this.state;
        const { navigation : { navigate } } = this.props;
        navigate('TakePhotoOnly', {url: pickedPhoto.node.image.uri})
    }
}

export default Container;
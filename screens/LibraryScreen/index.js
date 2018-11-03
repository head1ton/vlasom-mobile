import React, { Component } from 'react';
import { CameraRoll } from 'react-native';
import LibraryScreen from './presenter';

class Container extends Component{
    state = {
        photos: null,
        pickedPhoto: null,
        hasNextPage: false,
        isGettingPhotos: false,
        endCursor: ""
    }
    
    componentWillMount = async() => {
        const cameraPhotos = await CameraRoll.getPhotos({
            first: 200,
            assetType: 'Photos'
        });
        this.setState({
            photos: cameraPhotos.edges,
            pickedPhoto: cameraPhotos.edges[0],
            hasNextPage: cameraPhotos.page_info.has_next_page,
            endCursor: cameraPhotos.page_info.end_cursor
        })
    }
    
    render(){
        return (
            <LibraryScreen {...this.state} pickPhoto={this._pickPhoto} approvePhoto={this._approvePhoto} withPhoto={this._withPhoto} morePhoto={this._morePhoto} />
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

    _morePhoto = async() => {
        const { endCursor } = this.state;
        this.setState({
            isGettingPhotos: true
        })
        const morePhotos = await CameraRoll.getPhotos({
            first: 200,
            after: endCursor,
            assetType: 'Photos'
        })
        this.setState({
            ...this.state,
            photos: [...this.state.photos, ...morePhotos.edges],
            hasNextPage: morePhotos.page_info.has_next_page,
            endCursor: morePhotos.page_info.end_cursor,
            isGettingPhotos: false
        })
    }
}

export default Container;
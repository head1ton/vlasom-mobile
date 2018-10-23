import React, { Component } from 'react';
import { CameraRoll } from 'react-native';
import LibraryScreen from './presenter';

class Container extends Component{
    state = {
        photo: null,
        pickedPhoto: null
    }

    componentDidMount = async() => {
        const { cameraPhotos } = await CameraRoll.getPhotos({
            first: 5,
            assetType: 'Photos'
        });
        console.log('hi')
        console.log(cameraPhotos);
    }

    render(){
        return (
            <LibraryScreen />
        )
    }

}

export default Container;
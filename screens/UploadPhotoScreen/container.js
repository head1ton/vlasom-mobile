import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import UploadPhotoScreen from './presenter';

class Container extends Component{
    state = {
        category: -1,
        location: "",
        description: "",
        tags: "",
        isSubmitting: false,
        categorys: null,
        isLoading: true
    }

    static propTypes = {
        allCategoryName: PropTypes.func.isRequired,
        uploadPhoto: PropTypes.func.isRequired
    }

    componentWillMount = async() => {
        const { allCategoryName } = this.props;
        const categorys = await allCategoryName();
        if (categorys){
            this.setState({
                categorys: categorys,
                isLoading: false
            })
        }
    }

    render(){
        const { navigation : { state : { params : { url } } } } = this.props;
        return(
            <UploadPhotoScreen 
            imageURL={url} 
            {...this.state} 
            onCategoryChange={this._onCategoryChange}  
            onLocationChange={this._onLocationChange} 
            onDescriptionChange={this._onDescriptionChange} 
            onTagsChange={this._onTagsChange} 
            submit={this._submit} 
            />
        )
    }

    _onCategoryChange = (value) => {
        this.setState({
            category: value
        })
    }

    _onLocationChange = (text) => {
        this.setState({
            location: text
        })
    }

    _onDescriptionChange = (text) => {
        this.setState({
            description: text
        })
    }

    _onTagsChange = (text) => {
        this.setState({
            tags: text
        })
    }

    _submit = async() => {
        const { category, location, description, tags } = this.state;
        const { uploadPhoto } = this.props;
        const { navigation, navigation : { state : { params : { url } } } } = this.props;
        if(category && location && description && tags){
            this.setState({
                isSubmitting: true
            });
            const uploadResult = await uploadPhoto(url, category, location, description, tags);
            if (uploadResult){
                navigation.goBack(null);
                navigation.goBack(null);
                navigation.goBack(null);
            }
            else{
                this.setState({
                    isSubmitting: false
                })
                Alert.alert('내용을 확인해주세요')
            }
        }
        else{
            Alert.alert('내용을 작성해 주세요.')
        }
    }
}

export default Container;
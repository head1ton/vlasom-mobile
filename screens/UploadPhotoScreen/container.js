import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import UploadPhotoScreen from './presenter';

class Container extends Component{
    state = {
        category: "",
        location: "",
        description: "",
        tags: "",
        isSubmitting: false,
        categorys: null,
        isLoading: true
    }

    static propTypes = {
        allCategoryName: PropTypes.func.isRequired
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
        console.log(this.state.category)
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

    _submit = () => {
        const { category, location, description, tags } = this.state;
        if(category && location && description && tags){
            this.setState({
                isSubmitting: true
            })
        }
        else{
            Alert.alert('내용을 작성해 주세요.')
        }
    }
}

export default Container;
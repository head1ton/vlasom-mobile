import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from '../../components/Photo';
import { View, ScrollView, ActivityIndicator } from 'react-native';

class Container extends Component{
    static propTypes = {
        getPhotoDetail: PropTypes.func.isRequired
    }

    state = {
        isLoading: true,
        photo: null
    }
    
    componentDidMount = async() =>{
        const { getPhotoDetail } = this.props;
        const photo = await getPhotoDetail();
        if(photo.id){
            this.setState({
                photo: photo,
                isLoading: false
            })
        }
    }

    render(){
        const { isLoading, photo } = this.state;
        if(isLoading){
            return(
                <View style={[{flex: 1}, {alignItems: 'center'}, {justifyContent: 'center'}]}>
                    <ActivityIndicator size='large' color='#d5426a' /> 
                </View>
            )
        }
        return(
            <ScrollView>
            <View style={[{flex: 1},{backgroundColor: 'white'}]}>
                <Photo {...photo} />
            </View>
            </ScrollView>
        )
    }
}

export default Container;
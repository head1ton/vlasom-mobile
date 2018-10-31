import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View } from 'react-native';
import CategoryListScreen from './presenter';

class Container extends Component{
    state = {
        isFetching: true,
        images: []
    }

    static propTypes = {
        getCategoryImage: PropTypes.func.isRequired,
    }

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.categoryName
    })

    componentDidMount = async() => {
        const { getCategoryImage } = this.props;
        const images = await getCategoryImage();
        this.setState({
            images,
            isFetching: false
        })
    }

    render(){
        const { isFetching, images } = this.state;
        console.log(isFetching);
        console.log(images);
        if(isFetching){
            return(
                <View style={[{flex: 1}, {alignItems: 'center'}, {justifyContent: 'center'}]}>
                    <ActivityIndicator size='large' color='#d5426a' /> 
                </View>
            )
        }
        else{
            return (
                <CategoryListScreen {...this.state} {...this.props} refresh={this._refresh} />
            )
        }
    }

    _refresh = async() => {
        const { getCategoryImage } = this.props;
        this.setState({
            isFetching: true
        })
        const newImages = await getCategoryImage();
        this.setState({
            images: newImages,
            isFetching: false
        })
    }
}

export default Container;
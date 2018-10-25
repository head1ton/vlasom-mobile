import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text,  ActivityIndicator } from 'react-native';
import LikeScreen from './presenter';

class Container extends Component{
    static propTypes = {
        getPhotoLikes: PropTypes.func.isRequired
    }

    state = {
        isFetching: true,
        users: null
    }

    componentDidMount = async() => {
        const { getPhotoLikes } = this.props;
        const users = await getPhotoLikes();

        if(users){
            this.setState({
                isFetching: false,
                users: users
            })
        }
        else{
            this.setState({
                isFetching: true,
                users: null
            })
        }
    }

    render(){
        const { isFetching , users } = this.state;
        if(isFetching){
            return(
                <View style={[{flex: 1}, {alignItems: 'center'}, {justifyContent: 'center'}]}>
                    <ActivityIndicator size='large' color='#d5426a' /> 
                </View>
            )
        }
        else{
            return(
                <LikeScreen refresh={this._refresh} userList={users} isFetching={isFetching} />
            )
        }
    }

    _refresh = async() => {
        const { getPhotoLikes } = this.props;
        this.setState({
            isFetching: true
        });
        const newUserList = await getPhotoLikes();
        this.setState({
            users: newUserList,
            isFetching: false
        })
    }
}

export default Container;
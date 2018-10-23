import React, { Component } from 'react';
import Profile from '../../components/Profile';

class Container extends Component{
    constructor(props){
        super(props);
        const { navigation : { state : { params : { user } } } } = props;
        this.state = {
            profile: user
        }
    }

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.user.nickname
    })

    componentDidMount(){
        const { getUserProfile } = this.props;
        const { profile : { username } } = this.state;
        getUserProfile(username);
    }

    render(){
        return(
            <Profile {...this.state} />
        )
    }
}

export default Container;
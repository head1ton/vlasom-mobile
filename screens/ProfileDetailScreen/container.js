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
        this._getUserProfile();
        console.log(this.state)
    }

    render(){
        return(
            <Profile {...this.state} refresh={this._getUserProfile} />
        )
    }

    _getUserProfile = async() => {
        const { getUserProfile } = this.props;
        const { profile : { username } } = this.state;
        const completeProfile = await getUserProfile(username);
        if(completeProfile.username){
            this.setState({
                profile: completeProfile
            })
        }
    }
}

export default Container;
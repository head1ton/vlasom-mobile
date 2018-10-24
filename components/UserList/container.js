import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserList from './presenter';

class Container extends Component{
    constructor(props){
        super(props);
        this.state = {
            following: props.following
        }
    }

    static propTypes ={
        followUser: PropTypes.func.isRequired,
        unfollowUser: PropTypes.func.isRequired,
    }

    render(){
        return(
            <UserList  {...this.props} {...this.state} handleFollowPress={this._handleFollowPress} />
        )
    }

    _handleFollowPress = () => {
        const { following } = this.state;
        const { followUser, unfollowUser } = this.props;
        if(following){
            unfollowUser();
            this.setState({
                following: false
            })
        }
        else{
            followUser();
            this.setState({
                following: true
            })
        }
    }

}

export default Container;
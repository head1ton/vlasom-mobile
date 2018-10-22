import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from '../../components/Profile';

class Container extends Component{
    static propTypes = {
        loginUser: PropTypes.object.isRequired,
        getMyProfile: PropTypes.func.isRequired
    }

    render(){
        const { loginUser, getMyProfile } = this.props;
        return(
            <Profile profile={loginUser} refresh={getMyProfile} />
        )
    }
}

export default Container;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InterestListScreen from './presenter';

class Container extends Component{
    state = {
        isFetching: false
    }

    static propTypes = {
        loginUser: PropTypes.object.isRequired,
        getMyProfile: PropTypes.func.isRequired,
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.loginUser){
            this.setState({
                isFetching: false
            })
        }
    }

    render(){
        return (
            <InterestListScreen {...this.state} {...this.props} refresh={this._refresh} />
        )
    }

    _refresh = () => {
        const { getMyProfile } = this.props;
        this.setState({
            isFetching: true
        })
        getMyProfile();
    }
}

export default Container;
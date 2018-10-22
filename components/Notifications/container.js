import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifications from './presenter';

class Container extends Component{
    static propTypes = {

    }

    render(){
        console.log(this.props)
        return (
            <Notifications {...this.props} />
        )
    }
}

export default Container;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from './presenter';

class Container extends Component{
    static propTypes = {
        profile: PropTypes.object.isRequired,
        refresh: PropTypes.func.isRequired
    }

    state = {
        isFetching: true
    }

    componentDidMount(){
        const { profile } = this.props;
        if(profile){
            this.setState({
                isFetching: false
            })
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.profile){
            this.setState({
                isFetching: false
            })
        }
    }

    render(){
        const { isFetching } = this.state;
        console.log(this.props.profile);
        return (
            <Profile {...this.props} isFetching={isFetching} />
        )
    }
}

export default Container;
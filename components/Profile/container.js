import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from './presenter';

class Container extends Component{
    static propTypes = {
        profile: PropTypes.object.isRequired,
        refresh: PropTypes.func.isRequired
    }

    state = {
        isFetching: true,
        mode: 'upload'
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
        const { isFetching, mode } = this.state;
        console.log(this.props.profile);
        return (
            <Profile {...this.props} mode={mode} isFetching={isFetching} changeToUpload={this._changeToUpload} changeToInterest={this._changeToInterest} changeToMore={this._changeToMore} />
        )
    }

    _changeToUpload = () => {
        this.setState({
            mode: 'upload'
        })
    }

    _changeToInterest = () => {
        this.setState({
            mode: 'interest'
        })
    }

    _changeToMore = () => {
        this.setState({
            mode: 'more'
        })
    }
}

export default Container;
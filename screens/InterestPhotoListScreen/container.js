import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InterestPhotoListScreen from './presenter';

class Container extends Component{
    state = {
        isFetching: false
    }

    static defaultProps = {
        interest: []
    }

    static propTypes = {
        getInterestList: PropTypes.func.isRequired,
        interest: PropTypes.array
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.interest){
            this.setState({
                isFetching: false
            })
        }
    }

    render(){
        return (
            <InterestPhotoListScreen {...this.state} {...this.props} refresh={this._refresh} withPhoto={this._withPhoto} />
        )
    }

    _refresh = () => {
        const { getInterestList } = this.props;
        this.setState({
            isFetching: true
        })
        getInterestList();
    }
}

export default Container;
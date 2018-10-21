import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedScreen from './presenter';

class Container extends Component{
    state = {
        isFetching: false
    }

    static propTypes = {
        feed: PropTypes.array,
        getFeed: PropTypes.func.isRequired
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.feed){
            this.setState({
                isFetching: false
            })
        }
    }

    render(){
        return (

            <FeedScreen {...this.props} {...this.state} refresh={this._refresh} />
        )
    }

    _refresh = () => {
        const { getFeed } = this.props;
        this.setState({
            isFetching: true
        })
        getFeed();
    }
};

export default Container;
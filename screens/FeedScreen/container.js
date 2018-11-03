import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedScreen from './presenter';

class Container extends Component{
    constructor(props){
        super(props);
        const { feed } = props;
        this.state = {
            isFetching: false,
            page: 1,
            isLoadingMore: false,
            feed: feed
        }
    }

    static propTypes = {
        getFeed: PropTypes.func.isRequired,
        initApp: PropTypes.func.isRequired,
        getFeedMore: PropTypes.func.isRequired,
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.feed){
            this.setState({
                isFetching: false
            })
        }
    }

    componentDidMount(){
        const { initApp } = this.props;
        initApp();
    }

    render(){
        return (

            <FeedScreen {...this.props} {...this.state} refresh={this._refresh} feedMore={this._feedMore} />
        )
    }

    _refresh = () => {
        console.log('weq')
        const { getFeed } = this.props;
        this.setState({
            isFetching: true
        })
        getFeed();
    }

    _feedMore = async() => {
        console.log('gew')
        const { getFeedMore } = this.props;
        const { page } = this.state;
        this.setState({
            isLoadingMore: true
        });
        const result = await getFeedMore(page+1);
        if(result){
            this.setState({
                page: this.state.page+1,
                isLoadingMore: false,
                feed: [...this.state.feed, ...result]
            })
        }
        this.setState({
            isLoadingMore: false
        })
    }
};

export default Container;
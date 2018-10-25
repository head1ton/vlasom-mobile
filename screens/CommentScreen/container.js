import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentScreen from './presenter';

class Container extends Component{
    constructor(props){
        super(props);
        const { navigation : { state : { params : { comments } } } } = props;
        this.state = {
            comments,
            isFetching: false
        }
    }

    static propTypes = {
        getPhotoComments: PropTypes.func.isRequired
    }

    render(){
        const { comments, isFetching } = this.state;
        return (
            <CommentScreen comments={comments} isFetching={isFetching} refresh={this._refresh} />
        )
    }

    _refresh = async() => {
        const { getPhotoComments } = this.props;
        this.setState({
            isFetching: true
        });
        const newCommentList = await getPhotoComments();
        this.setState({
            comments: newCommentList,
            isFetching: false
        })
    }
}

export default Container;
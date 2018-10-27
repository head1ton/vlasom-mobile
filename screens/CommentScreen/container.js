import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentScreen from './presenter';

class Container extends Component{
    constructor(props){
        super(props);
        const { navigation : { state : { params : { comments } } } } = props;
        this.state = {
            comments,
            isFetching: false,
            newComment: ""
        }
    }

    static propTypes = {
        getPhotoComments: PropTypes.func.isRequired,
        commentOnImage: PropTypes.func.isRequired
    }

    render(){
        const { comments, isFetching, newComment } = this.state;
        return (
            <CommentScreen newComment={newComment} comments={comments} isFetching={isFetching} refresh={this._refresh} changeText={this._changeText} handleSubmit={this._handleSubmit} />
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

    _changeText = (text) => {
        this.setState({
            newComment: text
        })
    }
    
    _handleSubmit = async() => {
        const { commentOnImage } = this.props;
        const { newComment, comments } = this.state;
        const commentResult = await commentOnImage(newComment);
        if(commentResult){
            comments.push(commentResult)
            this.setState({
                newComment: "",
                comments
            })
        }
    }
}

export default Container;
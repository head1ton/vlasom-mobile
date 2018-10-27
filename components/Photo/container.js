import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './presenter';

class Container extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLiked: props.is_liked,
            likeCount: props.like_count,
            isInterested: props.is_interested_image,
            interestCount: props.interest_count_image,
            commentCount: props.comment_count,
            newComment: "",
            commentList: props.comments
        }
    }
    static propTypes = {
        dispatchLike: PropTypes.func.isRequired,
        dispatchInterest: PropTypes.func.isRequired,
        commentOnImage: PropTypes.func.isRequired
    }

    render(){
        return (
            <Photo handleLike={this._handleLike} handleInterest={this._handleInterest} changeText={this._changeText} handleSubmit={this._handleSubmit} {...this.props} {...this.state} commentCount={this.state.commentCount} />
        )
    }

    _handleLike = () => {
        const { dispatchLike } = this.props;
        const { isLiked } = this.state;
        dispatchLike(isLiked);
        if(isLiked){
            this.setState(prevState => {
                return {
                    isLiked: false,
                    likeCount: prevState.likeCount - 1
                }
            })
        }
        else{
            this.setState(prevState => {
                return {
                    isLiked: true,
                    likeCount: prevState.likeCount + 1
                }
            })
        }
    }

    _handleInterest = () => {
        const { dispatchInterest } = this.props;
        const { isInterested } = this.state;
        dispatchInterest(isInterested);
        if(isInterested){
            this.setState(prevState => {
                return {
                    isInterested: false,
                    interestCount: prevState.interestCount - 1
                }
            })
        }
        else{
            this.setState(prevState => {
                return {
                    isInterested: true,
                    interestCount: prevState.interestCount + 1
                }
            })
        }
    }

    _changeText = (text) => {
        this.setState({
            newComment: text
        })
    }
    
    _handleSubmit = async() => {
        const { commentOnImage } = this.props;
        const { newComment, commentCount, commentList } = this.state;
        const commentResult = await commentOnImage(newComment);
        if(commentResult){
            commentList.push(commentResult)
            this.setState({
                commentCount: commentCount + 1,
                newComment: "",
                commentList
            })
        }
    }
};

export default Container;
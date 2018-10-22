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
            commentCount: props.comment_count
        }
    }
    static propTypes = {
        dispatchLike: PropTypes.func.isRequired,
        dispatchInterest: PropTypes.func.isRequired
    }

    render(){
        return (
            <Photo handleLike={this._handleLike} handleInterest={this._handleInterest} {...this.props} {...this.state} />
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
};

export default Container;
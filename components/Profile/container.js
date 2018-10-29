import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Profile from './presenter';
import ActionSheet from 'react-native-actionsheet';

const options = ['Cancel', 'Logout']
const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 1;

class Container extends Component{
    constructor(props){
        super(props);
        this.state = {
            isFollowing: props.profile.following,
            isFetching: true,
            mode: 'upload'
        }
    }
    static propTypes = {
        profile: PropTypes.object.isRequired,
        refresh: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired,
        followUser: PropTypes.func.isRequired,
        unfollowUser: PropTypes.func.isRequired,
        showInterest: PropTypes.bool.isRequired
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
        const { isFetching, mode, isFollowing } = this.state;
        return (
            <View style={{flex: 1}}>
                <Profile {...this.props} mode={mode} isFollowing={isFollowing} isFetching={isFetching} showActionSheet={this._showActionSheet} changeToUpload={this._changeToUpload} changeToInterest={this._changeToInterest} changeToUploadGrid={this._changeToUploadGrid} changeToInterestGrid={this._changeTointerestGrid} handleFollowPress={this._handleFollowPress} />
                <ActionSheet ref={actionSheet => (this.actionSheet = actionSheet)} options={options} cancelButtonIndex={CANCEL_INDEX} destructiveButtonIndex={DESTRUCTIVE_INDEX} onPress={this._handleSheetPress} />
            </View>
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

    _changeToUploadGrid = () => {
        this.setState({
            mode: 'upload_grid'
        })
    }

    _changeTointerestGrid = () => {
        this.setState({
            mode: 'interest_grid'
        })
    }

    _showActionSheet = () => {
        const { profile : { is_self } } = this.props;
        if(is_self){
            this.actionSheet.show();
        }
    }

    _handleSheetPress = (index) => {
        const { logout } = this.props;
        if(index === 1){
            logout();
        }
    }

    _handleFollowPress = () => {
        const { isFollowing } = this.state;
        const { followUser, unfollowUser } = this.props;
        if(isFollowing){
            unfollowUser();
            this.setState({
                isFollowing: false
            })
        }
        else{
            followUser();
            this.setState({
                isFollowing: true
            })
        }
    }
}

export default Container;
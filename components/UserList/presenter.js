import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, RefreshControl, Image, Dimensions } from 'react-native';
import FadeIn from 'react-native-fade-in-image';
import { withNavigation } from 'react-navigation';

const { width, height } = Dimensions.get('window');

const UserList = props => {
    const user = {
        following: props.following,
        id: props.id,
        name: props.name,
        nickname: props.nickname,
        profile_image: props.profile_image,
        username: props.username,
        description: props.description,
        follower_count: props.follower_count,
        following_count: props.following_count,
        is_self: props.is_self,
        post_count: props.post_count,
    }
    return (
        <View style={styles.listBox}>
            <TouchableOpacity onPressOut={() => props.navigation.navigate('ProfileDetail', { user: user })}>
                <FadeIn>
                    <Image source={props.profile_image ? {uri: props.profile_image} : require('../../assets/images/profile-red.png')} style={styles.profileImage} defaultSource={require('../../assets/images/profile-red.png')} />
                </FadeIn>
            </TouchableOpacity>
            <View style={styles.nickname}>
                <Text style={styles.nicknameText}>{props.nickname}</Text>
            </View>
            <View>
                <TouchableOpacity style={props.following ? styles.unfollow : styles.follow} onPressOut={props.handleFollowPress}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>{props.following ? 'unfollow' : 'follow'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    listBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopColor: '#c0c1c2',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#c0c1c2',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 20 
    },
    nickname: {
        marginRight: 'auto',
        width: width/2
    },
    nicknameText: {
        fontWeight: '600',
        fontSize: 15
    },
    follow: {
        borderRadius: 5,
        backgroundColor: '#d5426a'
    },
    unfollow: {
        borderRadius: 5,
        backgroundColor: '#c0c1c2'
    },
    btn: {
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        overflow: 'hidden'
    },
    btnText: {
        fontWeight: '600',
        textAlign: 'center',
        color: 'white'
    }
})

UserList.propTypes = {
    following: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    profile_image: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    description: PropTypes.string,
    follower_count: PropTypes.number.isRequired,
    following_count: PropTypes.number.isRequired,
    is_self: PropTypes.bool.isRequired,
    post_count: PropTypes.number.isRequired,
    handleFollowPress: PropTypes.func.isRequired
}

export default withNavigation(UserList);
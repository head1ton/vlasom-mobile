import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import FadeIn from 'react-native-fade-in-image';

const { width, height } = Dimensions.get('window');

const Notifications = props => (
    <View style={props.is_viewed ? styles.containerAfter : styles.containerBefore }>
        <TouchableOpacity onPressOut={() => props.navigation.navigate('ProfileDetail', {user: props.from_user})}>
            <FadeIn>
                <Image source={props.from_user.profile_image ? {uri: props.from_user.profile_image} : require('../../assets/images/profile-red.png')} style={styles.profile} defaultSource={require('../../assets/images/profile-red.png')} />
            </FadeIn>
        </TouchableOpacity>
        <Text style={styles.content}>
        {props.from_user.id === props.to_user.id ? '회원' : 
            <Text style={styles.bold}>{props.from_user.nickname}</Text>}
            {props.notification_type === 'like' && ` 님이 회원님의 사진을 좋아합니다.`}
            {props.notification_type === 'follow'  && ` 님이 회원님을 팔로우합니다.`}
            {props.notification_type === 'interest' && props.category !== null && ` 님이 ${props.category.name} 을 관심있어합니다. `}
            {props.notification_type === 'interest' && props.category === null && ` 님이 회원님의 사진을 관심있어합니다.`}
            {props.notification_type === 'comment' && ` 님이 회원님의 사진에 댓글을 남겼습니다 :${"\n"}"${props.comment}"`}
        </Text>
        {props.notification_type === 'follow' && (
        <TouchableOpacity onPressOut={() => {}} style={props.from_user.following ? styles.unfollow : styles.follow}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>
                {props.from_user.following ? "Unfollow" : "Follow"}
                </Text>
            </View>
        </TouchableOpacity>
        ) }
        {props.notification_type === 'interest' && props.category !== null && (
        <TouchableOpacity onPressOut={() => {}} style={styles.touchable}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>
                {props.category.name}
                </Text>
            </View>
        </TouchableOpacity>
        )}
        {props.notification_type === 'like' && (
        <TouchableOpacity onpressOut={() => {}}>
            <FadeIn>
                <Image source={{uri: props.image.image}} style={styles.image} />
            </FadeIn>
        </TouchableOpacity> 
        )}
        {props.notification_type === 'comment' && (
        <TouchableOpacity onpressOut={() => {}}>
            <FadeIn>
                <Image source={{uri: props.image.image}} style={styles.image} />
            </FadeIn>
        </TouchableOpacity> 
        )}
        {props.notification_type === 'interest' && props.category === null  && (
        <TouchableOpacity onpressOut={() => {}}>
            <FadeIn>
                <Image source={{uri: props.image.image}} style={styles.image} />
            </FadeIn>
        </TouchableOpacity> 
        )}
    </View>
)

Notifications.propTypes = {
    category: PropTypes.shape({
        id: PropTypes.number.isRequired,
        interest_count_category: PropTypes.number.isRequired,
        is_interested_category: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
    }),
    comment: PropTypes.string,
    from_user: PropTypes.shape({
        following: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
    }).isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.shape({
        image: PropTypes.string.isRequired
    }),
    is_viewed: PropTypes.bool.isRequired,
    natural_time: PropTypes.string.isRequired,
    notification_type: PropTypes.oneOf(['like','follow','interest','comment']).isRequired,
    to_user: PropTypes.shape({
        following: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
    }).isRequired
}

const styles = StyleSheet.create({
    containerAfter: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    containerBefore: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e1e1e1'
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 20   
    },
    content: {
        marginRight: 'auto',
        width: width/2
    },
    bold: {
        fontWeight: '600'
    },
    image: {
        width: 50,
        height: 50
    },
    touchable: {
        borderRadius: 5,
        backgroundColor: '#d5426a'
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

export default withNavigation(Notifications);
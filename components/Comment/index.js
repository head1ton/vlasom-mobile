import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

const { width, height } = Dimensions.get('window');

const Comment = props => (
    <View style={styles.container}>
    <View style={styles.commentBox}>
        <TouchableOpacity onPressOut={() => props.navigation.navigate('ProfileDetail', {user: props.user})}>
            <Text style={styles.username}>{props.user.nickname}</Text>
        </TouchableOpacity>
        <Text style={styles.content}>{props.message}</Text>
    </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderBottomColor: '#c0c1c2',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    commentBox: {
        paddingVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: width-100
    },
    username: {
        fontWeight: '600',
        fontSize: 16,
        marginRight: 20
    }
})

Comment.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        profile_image: PropTypes.string,
        nickname: PropTypes.string.isRequired,
        description: PropTypes.string,
        follower_count: PropTypes.number.isRequired,
        following: PropTypes.bool.isRequired,
        following_count: PropTypes.number.isRequired,
        is_self: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        post_count: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired
    })
}

export default withNavigation(Comment);
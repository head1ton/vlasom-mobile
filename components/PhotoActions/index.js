import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation'

const PhotoActions = props => (
    <View style={styles.container}>
        <View style={styles.actions}>
            <TouchableOpacity onPressOut={props.handleLike}>
                <View style={styles.action}>
                    <Ionicons name={props.isLiked ? "ios-heart" : 'ios-heart-outline'} size={30} color={props.isLiked ? '#d5426a' : 'black' } />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPressOut={() => props.navigation.navigate('Likes', {photoId: props.photoId})}>
                <View>
                    <Text style={styles.likes}>{props.likeCount} {props.likeCount === 1 ? 'like' : 'likes'}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPressOut={() => props.navigation.navigate('Comments', {comments: props.comments, photoId: props.photoId})}>
                <View style={styles.action}>
                    <Ionicons name={'ios-text-outline'} size={30} color={'black'} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPressOut={() => props.navigation.navigate('Comments', {comments: props.comments, photoId: props.photoId})}>
                <View>
                    <Text style={styles.likes}>{props.commentCount} {props.commentCount === 1 ? 'comment' : 'comments'}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPressOut={props.handleInterest}>
                <View style={styles.action}>
                    <Ionicons name={props.isInterested ? "ios-book" : 'ios-book-outline'} size={30} color={props.isInterested ? '#d5426a' : 'black' } />
                </View>
            </TouchableOpacity>
            <TouchableOpacity> 
                <View>
                    <Text style={styles.likes}>{props.interestCount} {props.interestCount === 1 ? 'interest' : 'interests'}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
)

PhotoActions.propTypes = {
    isLiked: PropTypes.bool.isRequired,
    likeCount: PropTypes.number.isRequired,
    isInterested: PropTypes.bool.isRequired,
    interestCount: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
    handleLike: PropTypes.func.isRequired,
    handleInterest: PropTypes.func.isRequired,
    photoId: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            user: PropTypes.shape({
                id: PropTypes.number.isRequired,
            profile_image: PropTypes.string,
            nickname: PropTypes.string.isRequired
            })
    }))
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    action: {
        marginRight: 10
    },
    likes: {
        fontWeight: '600',
        fontSize: 14,
        marginRight: 10
    }
})

export default withNavigation(PhotoActions);
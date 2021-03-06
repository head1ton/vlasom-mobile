import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView } from 'react-native';
import FadeIn from 'react-native-fade-in-image';
import PhotoActions from '../PhotoActions';
import { withNavigation } from 'react-navigation'

const {width, height} = Dimensions.get('window');

const Photo = props => (
    <View style={styles.photo}>
        <TouchableOpacity onPressOut={() => props.navigation.navigate('ProfileDetail', {user: props.user})}>
            <View style={styles.header}>
                <FadeIn>
                    <Image 
                    source={props.user.profile_image ? {
                        uri: props.user.profile_image
                    } : require('../../assets/images/profile-red.png')} 
                    style={styles.profileImage}
                    />
                </FadeIn>
                <View>
                    <Text style={styles.nickname}>{props.user.nickname}</Text>
                    {props.location && <Text style={styles.location}>{props.location}</Text>}
                </View>
            </View>
        </TouchableOpacity>
        <FadeIn>
            <Image source={{uri: props.image}} 
            style={{width, height: props.is_vertical? 600 : 300}}
            />
        </FadeIn>
        <View style={styles.photoMeta}>
        <PhotoActions 
        isLiked={props.isLiked} 
        likeCount={props.likeCount} 
        isInterested={props.isInterested} 
        interestCount={props.interestCount} 
        handleLike={props.handleLike} 
        handleInterest={props.handleInterest} 
        commentCount={props.commentCount} 
        photoId={props.id} 
        comments={props.commentList} 
        />
            <View style={styles.comment}>
                <Text style={styles.commentNickname}>
                    {props.user.nickname}
                </Text>
                <Text style={styles.description}>{props.description}</Text>
            </View>
            {props.commentList.length > 0 && (
                props.commentList.map((comment, index) => {
                    if(index < 5){
                        return(
                        <View style={styles.comment} key={comment.id}>
                            <Text style={styles.commentNickname}>
                                {comment.user.nickname}
                            </Text>
                            <Text style={styles.description}>{comment.message}</Text>
                        </View>
                    )}
                })
            )}
            <KeyboardAvoidingView style={{flex: 1}} enabled={true} behavior={'padding'} keyboardVerticalOffset={65}>
            <View style={styles.comment}>
                <TextInput 
                placeholder={'comment'} 
                style={styles.commentInput} 
                returnKeyType={'send'}
                onChangeText={props.changeText} 
                value={props.newComment} 
                onEndEditing={props.handleSubmit} 
                underlineColorAndroid={'transparent'} 
                autoCapitalize={'none'} 
                autoCorrect={false} 
                multiline={true} 
                />
            </View>
            </KeyboardAvoidingView>
            {props.commentList.length > 0 && (
            <TouchableOpacity onPressOut={() => props.navigation.navigate('Comments', {comments: props.commentList, photoId: props.id})}>
                <View style={styles.commentsLink}>
                    {props.comments.length === 1 ? (
                        <Text style={styles.linkText}>View 1 comment</Text>
                    ): <Text style={styles.linkText}>View all {props.commentCount} comments</Text>}
                </View>
            </TouchableOpacity>
            )}
            <Text style={styles.dateText}>{props.natural_time}</Text>
        </View>
    </View>
)

Photo.propTypes = {
    category: PropTypes.shape({
        id: PropTypes.number.isRequired,
        interest_count_category: PropTypes.number.isRequired,
        is_interested_category: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    comment_count: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            user: PropTypes.shape({
                id: PropTypes.number.isRequired,
            profile_image: PropTypes.string,
            nickname: PropTypes.string.isRequired
            })
    })),
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    interest_count_image: PropTypes.number.isRequired,
    is_interested_image: PropTypes.bool.isRequired,
    is_liked: PropTypes.bool.isRequired,
    like_count: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    natural_time: PropTypes.string.isRequired,
    tags: PropTypes.array,
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        profile_image: PropTypes.string,
        nickname: PropTypes.string.isRequired
    }).isRequired,
    is_vertical: PropTypes.bool.isRequired,
    handleLike: PropTypes.func.isRequired,
    handleInterest: PropTypes.func.isRequired,
    newComment: PropTypes.string.isRequired,
    changeText: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    commentList: PropTypes.arrayOf(
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
    photo: {
        width,
        marginBottom: 10
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#c0c1c2',
        borderBottomWidth: 1,
        flex: 1
    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 10
    },
    nickname: {
        fontWeight: '600',
        marginBottom: 3,
        fontSize: 15
    },
    location: {
        fontSize: 12
    },
    photoMeta: {
        paddingHorizontal: 15
    },
    comment: {
        marginTop: 5,
        flexDirection: 'row'
    },
    commentNickname: {
        marginRight: 5,
        fontWeight: '600',
        fontSize: 14
    },
    commentInput: {
        width: width-20
    },
    description: {
        fontWeight: '400',
        fontSize: 15
    },
    commentsLink: {
        marginTop: 5,
    },
    linkText: {
        fontSize: 15,
        color: '#c0c1c2'
    },
    dateText: {
        fontSize: 12,
        color: '#c0c1c2',
        marginTop: 10
    }
})

export default withNavigation(Photo);
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ScrollView, RefreshControl, TextInput, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import Comment from '../../components/Comment';

const { width, height } = Dimensions.get('window');

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

const CommentScreen = props => (
    <ScrollView refreshControl={<RefreshControl refreshing={props.isFetching} onRefresh={props.refresh} tintColor={'black'} />}>
        <View style={styles.container}>
            {props.comments.length > 0 ? props.comments.map(comment => (
                <Comment key={comment.id} {...comment} />
            )): (
                <View style={styles.notFound}>
                    <Text style={styles.notFoundText}>아직 댓글이 없습니다.</Text>
                </View>
            )}
        </View>
        <KeyboardAvoidingView 
                style={{flex: 1}} 
                enabled 
                behavior= {(Platform.OS === 'ios')? "padding" : null} 
                keyboardVerticalOffset={Platform.select({ios: 0, android: 500})} 
        >
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
    </ScrollView>
)

CommentScreen.propTypes = {
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
    isFetching: PropTypes.bool.isRequired,
    refresh: PropTypes.func.isRequired,
    changeText: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    newComment: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    notFound: {
        backgroundColor: 'transparent',
        marginTop: 20
    },
    notFoundText: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 14
    },
    comment: {
        marginTop: 5,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 15
    },
    commentInput: {
        width: width-20
    }
})

export default CommentScreen;
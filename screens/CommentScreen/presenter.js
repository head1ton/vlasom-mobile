import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import Comment from '../../components/Comment';

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
    refresh: PropTypes.func.isRequired
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
    }
})

export default CommentScreen;
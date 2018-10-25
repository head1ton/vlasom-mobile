import React from 'react';
import PropTypes from 'prop-types';
import UserList from '../../components/UserList';
import { View, ScrollView, RefreshControl, StyleSheet, Text } from 'react-native';

const LikeScreen = props => (
    <ScrollView refreshControl={<RefreshControl refreshing={props.isFetching} onRefresh={props.refresh} tintColor={'black'} />}>
        <View style={styles.container}>
            {props.userList.length > 0 ? props.userList.map(user => (
                <UserList key={user.id} {...user} />
            )) : (
                <View style={styles.notFound}>
                    <Text style={styles.notFoundText}>아직 이사진을 좋아하는 사람이 없습니다.</Text>
                </View>
            )}
        </View>
    </ScrollView>
)

LikeScreen.propTypes = {
    refresh: PropTypes.func.isRequired,
    usreList: PropTypes.arrayOf(
        PropTypes.shape({
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
            post_count: PropTypes.number.isRequired
        })
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default LikeScreen;
import React from 'react';
import PropTypes from 'prop-types';
import UserList from '../../components/UserList';
import { View, ScrollView, RefreshControl, StyleSheet } from 'react-native';

const LikeScreen = props => (
    <ScrollView refreshControl={<RefreshControl refreshing={props.isFetching} onRefresh={props.refresh} tintColor={'black'} />}>
        <View style={styles.container}>
            {props.userList.map(user => (
                <UserList key={user.id} {...user} />
            ))}
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
        backgroundColor: 'white'
    }
})

export default LikeScreen;
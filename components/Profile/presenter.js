import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, RefreshControl, StyleSheet, Dimensions } from 'react-native';
import Notifications from '../../components/Notifications';

const { width, height } = Dimensions.get('window');

const Profile = props => (
    <ScrollView refreshControl={<RefreshControl refreshing={props.isFetching} onRefresh={props.refresh} tintColor={'black'} />} >
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

Profile.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    refresh: PropTypes.func.isRequired,
    profile: PropTypes.shape({
        birth_day: PropTypes.string.isRequired,
        birth_month: PropTypes.string.isRequired,
        birth_year: PropTypes.string.isRequired,
        description: PropTypes.string,
        email: PropTypes.string.isRequired,
        follower_count: PropTypes.number.isRequired,
        following_count: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                image: PropTypes.string.isRequired,
                category: PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    is_interested_category: PropTypes.bool.isRequired,
                    interested_count_category: PropTypes.number.isRequired
                }),
                comment_count: PropTypes.number.isRequired,
                like_count: PropTypes.number.isRequired,
                interested_count_image: PropTypes.number.isRequired
            })
        ),
        name: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        notification_count: PropTypes.number.isRequired,
        post_count: PropTypes.number.isRequired,
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired,
        following: PropTypes.bool.isRequired,
        is_self: PropTypes.bool.isRequired
    }).isRequired
}

export default Profile;
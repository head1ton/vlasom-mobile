import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, RefreshControl, StyleSheet, Dimensions } from 'react-native';
import Notifications from '../../components/Notifications';

const { width, height } = Dimensions.get('window');

const NotificationScreen = props => (
    <ScrollView refreshControl={<RefreshControl refreshing={props.isFetching} onRefresh={props.refresh} tintColor={'black'} />} >
        <View style={styles.container}>
            {props.notifications.length === 0 ? (
                <Text style={styles.notFound}>No notifications.</Text>
            ) : props.notifications.map(notification => <Notifications key={notification.id} {...notification} />)}
        </View>
    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    notFound: {
        fontWeight: '600',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 20,
        width,
        fontSize: 16
    }
})

NotificationScreen.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    refresh: PropTypes.func.isRequired,
    notifications: PropTypes.array
}

export default NotificationScreen;
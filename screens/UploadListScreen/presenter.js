import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, RefreshControl, StyleSheet, Dimensions } from 'react-native';
import SquarePhoto from '../../components/SquarePhoto';

const { width, height } = Dimensions.get('window');

const InterestListScreen = props => (
    <ScrollView refreshControl={<RefreshControl refreshing={props.isFetching} onRefresh={props.refresh} tintColor={'black'} />} >
        <View style={styles.container}>
            {props.loginUser.images.legnth === 0 && <Text style={styles.notFound}>Nothing found</Text>}
            {props.loginUser.images.length > 0 && props.loginUser.images.map(upload => {
                if(upload.image){
                    return <SquarePhoto key={upload.id} imageURL={upload.image} photoId={upload.id} />
                }
            })}
        </View>
    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
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

InterestListScreen.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    refresh: PropTypes.func.isRequired,
    loginUser: PropTypes.object
}

export default InterestListScreen;
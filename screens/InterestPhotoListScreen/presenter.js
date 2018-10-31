import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, RefreshControl, StyleSheet, Dimensions } from 'react-native';
import SquarePhotoCamera from '../../components/SquarePhotoCamera';

const { width, height } = Dimensions.get('window');

const InterestPhotoListScreen = props => (
    <ScrollView refreshControl={<RefreshControl refreshing={props.isFetching} onRefresh={props.refresh} tintColor={'black'} />} >
        <View style={styles.container}>
            {props.interest.legnth === 0 && <Text style={styles.notFound}>Nothing found</Text>}
            {props.interest.length > 0 && props.interest.map(interest => {
                if(interest.image){
                    return <SquarePhotoCamera key={interest.image.id} imageURL={interest.image.image} photoId={interest.image.id} />
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

InterestPhotoListScreen.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    refresh: PropTypes.func.isRequired,
    interest: PropTypes.array
}

export default InterestPhotoListScreen;
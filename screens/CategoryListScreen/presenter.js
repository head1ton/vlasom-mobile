import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, RefreshControl, StyleSheet, Dimensions } from 'react-native';
import SquarePhoto from '../../components/SquarePhoto';

const { width, height } = Dimensions.get('window');

const CategoryListScreen = props => (
    <ScrollView refreshControl={<RefreshControl refreshing={props.isFetching} onRefresh={props.refresh} tintColor={'black'} />} >
        <View style={styles.container}>
            {props.images.length === 0 && <Text style={styles.notFound}>Nothing found</Text>}
            {props.images.length > 0 && props.images.map(image => {
                if(image.image){
                    return <SquarePhoto key={image.id} imageURL={image.image} photoId={image.id} />
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

CategoryListScreen.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    refresh: PropTypes.func.isRequired,
    images: PropTypes.array
}

export default CategoryListScreen;
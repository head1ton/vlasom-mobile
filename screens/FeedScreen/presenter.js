import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, RefreshControl, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Photo from '../../components/Photo';

class FeedScreen extends Component{
    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        refresh: PropTypes.func.isRequired,
        feed: PropTypes.array,
        isLoadingMore: PropTypes.bool.isRequired,
        feedMore: PropTypes.func.isRequired
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList 
                data={this.props.feed} 
                renderItem={({item}) => (
                    <Photo {...item} />
                )} 
                keyExtractor={item => item.image} 
                refreshing={this.props.isFetching} 
                onRefresh={this.props.refresh} 
                onEndReached={this.props.feedMore} 
                onEndReachedThreshold={5} 
                ListFooterComponent={this.props.isLoadingMore ? (
                    <View style={styles.loading}>
                        <ActivityIndicator size='small' color='black' />
                    </View>
                ): null}
                />
            </View>
        )
    }
}



/*
const FeedScreen = props => (
    <ScrollView refreshControl={<RefreshControl refreshing={props.isFetching} onRefresh={props.refresh} tintColor={'black'} />} >
        <View style={styles.container}>
            {props.feed && props.feed.map(photo => <Photo {...photo} key={photo.id} />)}
        </View>
    </ScrollView>
)
*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    loading: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})
/*
FeedScreen.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    refresh: PropTypes.func.isRequired,
    feed: PropTypes.array
}
*/
export default FeedScreen;
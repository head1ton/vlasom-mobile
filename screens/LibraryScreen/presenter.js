import React from 'react';
import PropTypes from 'prop-types';
import { View, Text ,StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, StatusBar, ActivityIndicator } from 'react-native';
import FitImage from 'react-native-fit-image';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const LibraryScreen = props => (
    <View style={styles.container}>
    <StatusBar hidden={true} />
        {props.photos && (
            <View style={styles.pictureContainer}>
                <FitImage source={{uri: props.pickedPhoto.node.image.uri}}/>
                <TouchableOpacity style={styles.action} onPressOut={props.approvePhoto}>
                    <View>
                        <MaterialIcons name={'check'} size={40} color={'white'} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action2} onPressOut={props.withPhoto}>
                    <View>
                        <MaterialIcons name={'close'} size={40} color={'white'} />
                    </View>
                </TouchableOpacity>
            </View>
        )}
        {props.photos && (
            <View style={styles.photos}>
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                    {props.photos.map((photo,index) => (
                        <TouchableOpacity key={index} onPressOut={() => props.pickPhoto(photo)}>
                            <FitImage source={{uri: photo.node.image.uri}} style={styles.smallPhoto} />
                            {photo.node.image.uri === props.pickedPhoto.node.image.uri && (
                                <View style={styles.selected}>
                                    <MaterialIcons name={'check'} size={40} color={'white'} />
                                </View>
                            )}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                {props.hasNextPage && (
                    <TouchableOpacity onPressOut={props.morePhoto}>
                        <View style={styles.more}>
                        {props.isGettingPhotos ? (
                            <ActivityIndicator size='small' color='black' />
                        ):(
                            <Text style={styles.moreText}>더보기</Text>
                        )}
                        </View>
                    </TouchableOpacity>
                    )}
            </View>
        )}
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    pictureContainer: {
        flex: 2
    },
    photos: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollViewContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    smallPhoto: {
        width: width/3,
        height: width/3
    },
    selected: {
        width: width/3,
        height: width/3,
        backgroundColor: 'black',
        opacity: 0.7,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    action: {
        backgroundColor: 'transparent',
        width: 40,
        height: 40,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    action2: {
        backgroundColor: 'transparent',
        width: 40,
        height: 40,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    more: {
        paddingVertical: 15
    },
    moreText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '600',
    }
})

LibraryScreen.propTypes = {
    pickedPhoto: PropTypes.object,
    photos: PropTypes.array,
    approvePhoto: PropTypes.func.isRequired,
    pickPhoto: PropTypes.func.isRequired,
    withPhoto: PropTypes.func.isRequired,
    hasNextPage: PropTypes.bool.isRequired,
    morePhoto: PropTypes.func.isRequired,
    isGettingPhotos: PropTypes.bool.isRequired
}

export default LibraryScreen;
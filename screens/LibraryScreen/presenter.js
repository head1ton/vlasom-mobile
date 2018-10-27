import React from 'react';
import PropTypes from 'prop-types';
import { View, Text ,StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
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
            </View>
        )}
        {props.photos && (
            <View style={styles.photos}>
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                    {props.photos.map((photo,index) => (
                        <TouchableOpacity key={index} onPressOut={() => props.pickPhoto(photo)}>
                            <FitImage source={{uri: photo.node.image.uri}} style={styles.smallPhoto} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
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
    action: {
        backgroundColor: 'transparent',
        width: 40,
        height: 40,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 10,
        right: 10
    }
})

LibraryScreen.propTypes = {
    pickedPhoto: PropTypes.object,
    photos: PropTypes.array,
    approvePhoto: PropTypes.func.isRequired,
    pickPhoto: PropTypes.func.isRequired
}

export default LibraryScreen;
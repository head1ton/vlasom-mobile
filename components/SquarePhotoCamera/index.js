import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation'
import FitImage from 'react-native-fit-image';

const { width, height } = Dimensions.get('window');

const SquarePhotoCamera = props => (
    <TouchableOpacity onPressOut={() => props.navigation.navigate('TakeOnly', {url: props.imageURL})}>
        <FitImage source={{uri: props.imageURL}} style={styles.image} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    image: {
        height: width/3,
        width: width/3
    }
})

SquarePhotoCamera.propTypes = {
    imageURL: PropTypes.string.isRequired,
    photoId: PropTypes.number.isRequired
}

export default withNavigation(SquarePhotoCamera);
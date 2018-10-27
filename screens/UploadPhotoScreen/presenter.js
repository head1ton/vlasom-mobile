import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StatusBar, Image, Dimensions, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Picker } from 'react-native';
import FitImage from 'react-native-fit-image';

const { width, height } = Dimensions.get('window');

const UploadPhotoScreen = props => (
    <View style={{flex: 1}}>
    {props.isLoading ? (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size='large' color='#d5426a' /> 
        </View>
    ) : (
        <View style={styles.container}>
        <StatusBar hidden={false} />
        <View style={styles.imageContainer}>
        <FitImage source={{uri: props.imageURL}} style={styles.image} />
        </View>
        <View style={styles.formContainer}>
            <View style={styles.row}>
                <View style={styles.inputLabel}>
                    <Text style={styles.labelText}>Category</Text>
                </View>
                <Picker
                selectedValue={props.category}
                style={styles.picker}
                onValueChange={(itemValue) => props.onCategoryChange(itemValue)} 
                mode={'dropdown'} 
                itemStyle={styles.pickerItem} 
                >
                <Picker.Item label="선택해주세요" value="" />
                {props.categorys.map(category => (
                    <Picker.Item key={category.id} label={category.name} value={category.id} />
                ))}
                </Picker>
            </View>
            <View style={styles.row}>
                <View style={styles.inputLabel}>
                    <Text style={styles.labelText}>Location</Text>
                </View>
                <TextInput 
                underlineColorAndroid={'transparent'}  
                style={styles.input} 
                value={props.location} 
                onChangeText={props.onLocationChange}
                />
            </View>
            <View style={styles.row}>
                <View style={styles.inputLabel}>
                    <Text style={styles.labelText}>Description</Text>
                </View>
                <TextInput 
                underlineColorAndroid={'transparent'}  
                style={styles.input} 
                value={props.description} 
                onChangeText={props.onDescriptionChange}
                />
            </View>
            <View style={styles.row}>
                <View style={styles.inputLabel}>
                    <Text style={styles.labelText}>Tags</Text>
                </View>
                <TextInput 
                underlineColorAndroid={'transparent'}  
                style={styles.input} 
                value={props.tags} 
                onChangeText={props.onTagsChange}
                />
            </View>
            <TouchableOpacity style={styles.rowCenter} onPressOut={props.submit}>
                <View style={styles.btn}>
                    {props.isSubmitting ? (
                        <ActivityIndicator size='small' color='white' />
                    ) : (
                        <Text style={styles.btnText}>Upload</Text>
                    )}
                </View>
            </TouchableOpacity>
        </View>
        </View>)}
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        flex: 2,
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        borderBottomColor: '#c0c1c2',
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
        width: width,
        paddingVertical: 10
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        paddingVertical: 10
    },
    inputLabel: {
        width: 120,
    },
    labelText: {
        color: '#d5426a',
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 15
    },
    input: {
        width: width - 120,
    },
    btn: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: '#d5426a'
    },
    btnText: {
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 14
    },
    picker: {
        width: width - 120
    }, 
    pickerItem: {
        color: '#d5426a',
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 15
    }
})

UploadPhotoScreen.propTypes = {
    imageURL: PropTypes.string.isRequired,
    category: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onCategoryChange: PropTypes.func.isRequired,
    onLocationChange: PropTypes.func.isRequired,
    onDescriptionChange: PropTypes.func.isRequired,
    onTagsChange: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    categorys: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            interest_count_category: PropTypes.number.isRequired,
            is_interested_category: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired
        })
    ),
    isLoading: PropTypes.bool.isRequired
}

export default UploadPhotoScreen
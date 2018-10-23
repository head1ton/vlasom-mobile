import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

class SearchBar extends Component{
    static propTypes = {
        submit: PropTypes.func.isRequired
    }

    state = {
        term: ""
    }

    render(){
        const { term } = this.state;
        return (
            <View style={styles.container}>
                <TextInput 
                style={styles.searchBar} 
                placeholder={'Search'} 
                returnKeyType={'search'}
                onChangeText={this._changeText} 
                value={term} 
                onEndEditing={this._handleSubmit} 
                underlineColorAndroid={'transparent'} 
                autoCapitalize={'none'} 
                autoCorrect={false} 
                />
            </View>
        )
    }

    _changeText = (text) => {
        this.setState({
            term: text
        })
    }
    
    _handleSubmit = () => {
        const { submit } = this.props;
        const { term } = this.state;
        submit(term);
    }
}

const styles = StyleSheet.create({
    container: {
        width: width - 100,
        backgroundColor: '#d5426a',
        paddingHorizontal: 10,
        height: 50,
        justifyContent: 'center',
    },
    searchBar: {
        height: 30,
        borderRadius: 4,
        padding: 5,
        backgroundColor: '#d5426a',
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth
    }
})

export default SearchBar;
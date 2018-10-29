import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MenuScreen = props => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.navCategory}>
            <View >
                <Text style={styles.navCategoryText}>{props.nickname}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navCategory}>
            <View>
                <Text style={styles.navCategoryText}>카테고리</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navCategory} onPressOut={props.showActionSheet}>
            <View>
                <Text style={styles.navCategoryText}>Log Out</Text>
            </View>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    navCategory: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderBottomColor: '#c0c1c2',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    navCategoryText: {
        fontWeight: '600',
        fontSize: 15
    }
})

MenuScreen.propTypes = {
    categoryName: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            interest_count_category: PropTypes.number.isRequired,
            is_interested_category: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired
        })
    ),
    nickname: PropTypes.string.isRequired,
    showActionSheet: PropTypes.func.isRequired
}

export default MenuScreen;
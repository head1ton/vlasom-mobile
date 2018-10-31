import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, UIManager, Platform } from 'react-native';

class MenuScreen extends Component{
    constructor(){
        super();
        if( Platform.OS === 'android' )
        {
          UIManager.setLayoutAnimationEnabledExperimental(true);
        }
 
        this.state = { 
           updatedHeightProfile: 0, 
           updatedHeightCategory: 0,
           expandProfile: false,
           expandCategory: false,
          }
 
    }

    static propTypes = {
        categoryName: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                interest_count_category: PropTypes.number.isRequired,
                is_interested_category: PropTypes.bool.isRequired,
                name: PropTypes.string.isRequired
            })
        ),
        nickname: PropTypes.string.isRequired,
        showActionSheet: PropTypes.func.isRequired,
        profileList: PropTypes.array.isRequired
    }

    _handleCollapseProfile = () => {
        LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );
        if( this.state.expandProfile === false )
        {
            this.setState({ 
              updatedHeightProfile: 40*this.props.profileList.length, 
              expandProfile: true,
            }); 
        }
        else
        {
            this.setState({ 
              updatedHeightProfile: 0, 
              expandProfile: false,
            });
        }
    }

    _handleCollapseCategory = () => {
        LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );
        if( this.state.expandCategory === false )
        {
            this.setState({ 
                updatedHeightCategory: 40*this.props.categoryName.length, 
                expandCategory: true,
            }); 
        }
        else
        {
            this.setState({ 
                updatedHeightCategory: 0, 
                expandCategory: false,
            });
        }
    }

    render(){
        const { navigation : { navigate } } = this.props;
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.navCategory} onPressOut={this._handleCollapseProfile}>
                    <View>
                        <Text style={styles.navCategoryText}>{this.props.nickname}</Text>
                    </View>
                </TouchableOpacity>
                <View style={[styles.content, {height: this.state.updatedHeightProfile, zIndex: 1}]}>
                    {this.props.profileList.map((profile, index) => (
                        <TouchableOpacity key={index} onPressOut={index === 0 ? () => navigate('Profile') : index === 1 ? () => navigate('InterestList'): index === 2 ? () => navigate('UploadList') : null}>
                        <View style={[styles.contentItem]}>
                            <Text>{profile}</Text>
                        </View>
                        </TouchableOpacity>
                    ))}
                </View>
                <TouchableOpacity style={styles.navCategory} onPressOut={this._handleCollapseCategory}>
                    <View>
                        <Text style={styles.navCategoryText}>카테고리</Text>
                    </View>
                </TouchableOpacity>
                <View style={[styles.content, {height: this.state.updatedHeightCategory, zIndex: 1}]}>
                    {this.props.categoryName.map(category => (
                        <TouchableOpacity key={category.id}>
                        <View style={[styles.contentItem]}>
                            <Text>{category.name}</Text>
                        </View>
                        </TouchableOpacity>
                    ))}
                </View>
                <TouchableOpacity style={styles.navCategory} onPressOut={this.props.showActionSheet}>
                    <View>
                        <Text style={styles.navCategoryText}>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

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
    },
    content: {
        overflow: 'hidden',
    },
    contentItem: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    contentItemText: {
        
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
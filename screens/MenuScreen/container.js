import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import MenuScreen from './presenter';
import ActionSheet from 'react-native-actionsheet';

const options = ['Cancel', 'Logout']
const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 1;
const profileList = [
    '프로필',
    '관심목록',
    '업로드목록'
]

class Container extends Component{
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
        logout: PropTypes.func.isRequired
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <MenuScreen {...this.props} showActionSheet={this._showActionSheet} profileList={profileList} />
                <ActionSheet ref={actionSheet => (this.actionSheet = actionSheet)} options={options} cancelButtonIndex={CANCEL_INDEX} destructiveButtonIndex={DESTRUCTIVE_INDEX} onPress={this._handleSheetPress} />
            </View>
        )
    }

    _showActionSheet = () => {
        this.actionSheet.show();
    }

    _handleSheetPress = (index) => {
        const { logout } = this.props;
        if(index === 1){
            logout();
        }
    }
}

export default Container;
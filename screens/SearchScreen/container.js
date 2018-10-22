import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchScreen from './presenter';
import SearchBar from '../../components/SearchBar';

class Container extends Component{
    static navigationOptions = ({navigation}) => {
        const { params } = navigation.state;
        return{
            headerTitle: <SearchBar submit={text => params.submitSearch(text)} />
        }
    }

    state = {
        searchingBy: "",
        isFetching: false
    }

    static propTypes = {
        getEmptyFeed: PropTypes.func.isRequired,
        searchTag: PropTypes.func.isRequired,
        search: PropTypes.array
    }

    componentDidMount(){
        const { navigation } = this.props;
        navigation.setParams({
            submitSearch: this._submitSearch
        })
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.search){
            this.setState({
                isFetching: false
            })
        }
    }

    render(){
        return (
            <SearchScreen {...this.state} {...this.props} refresh={this._refresh} />
        )
    }

    _submitSearch = (text) => {
        const { searchingBy } = this.state;
        const { searchTag } = this.props;
        this.setState({
            searchingBy: text,
            isFetching: true
        });
        searchTag(text);
    }

    _refresh = () => {
        const { searchingBy } = this.state;
        const { getEmptyFeed, searchTag } = this.props;
        if(searchingBy === ""){
            getEmptyFeed();
        }
        else{
            searchTag(searchingBy);
        }
    }
}

export default Container;
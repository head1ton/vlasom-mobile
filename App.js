import React from 'react';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  state = {
    isLoadingComplete: false
  }
  render() {
    const { isLoadingComplete } = this.state;
    if(!isLoadingComplete){
      return (
        <AppLoading  
        startAsync={this._loadAssetsAsync} 
        onError={this._handleLoadingError} 
        onFinish={this._handleFinishLoading} 
        />
      )
    }
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }

  _loadAssetsAsync = async() => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/female-before.png'),
        require('./assets/images/female.png'),
        require('./assets/images/history-red.png'),
        require('./assets/images/history.png'),
        require('./assets/images/home-red.png'),
        require('./assets/images/home.png'),
        require('./assets/images/like-list-red.png'),
        require('./assets/images/like-list.png'),
        require('./assets/images/login-pw.png'),
        require('./assets/images/logo-large-white.png'),
        require('./assets/images/logo-small-red.png'),
        require('./assets/images/logo-small-white.png'),
        require('./assets/images/logo-xlarge-red.png'),
        require('./assets/images/male-before.png'),
        require('./assets/images/male.png'),
        require('./assets/images/menu-white.png'),
        require('./assets/images/more-red.png'),
        require('./assets/images/more.png'),
        require('./assets/images/nav-nickname.png'),
        require('./assets/images/profile-red.png'),
        require('./assets/images/search.png'),
      ]),
      Font.loadAsync({
        ...Ionicons.font,
        ...MaterialIcons.font
      })
    ])
  }

  _handleLoadingError = error => {
    console.error(error);
  }

  _handleFinishLoading = async() => {
    this.setState({
      isLoadingComplete: true
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
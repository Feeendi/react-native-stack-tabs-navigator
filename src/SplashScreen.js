import React, { Component } from 'react';
import { StackActions } from '@react-navigation/native';
import AnimatedSplash from 'react-native-animated-splash-screen';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('TopBarNavigator'));
    }, 3000);
  }

  render() {
    return (
      <AnimatedSplash
        translucent={true}
        isLoaded={this.state.isLoaded}
        logoImage={require('../assets/logo.png')}
        backgroundColor={'white'}
        logoHeight={300}
        logoWidth={300}
      />

    );
  }
}

export default SplashScreen;

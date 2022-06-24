import React, { Component } from 'react';
import { View, Image } from 'react-native'
import { StackActions } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import styles from './styles';

class SplashLottie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('TopBarNavigator'));
    }, 5000);
  }

  render() {
    return (
      <View style={styles.topbarnav}>
        <LottieView source={require('../assets/lottiesplash.json')} autoPlay loop style={styles.lottie} />
        <View style={styles.arealogoberanda}>
          <Image
            source={{
              uri: 'https://i.postimg.cc/jjkfRGRy/udb.jpg',
            }}
            style={styles.logoberanda} />
        </View>
      </View>
    );
  }
}

export default SplashLottie;

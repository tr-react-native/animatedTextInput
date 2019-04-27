

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';

const AppNavigator = createStackNavigator({
    Splash: {
        screen: SplashScreen,
        navigationOptions: ({navigation}) =>
            ({
                header:null
            })
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: ({navigation}) =>
            ({
                header:null
            })
    }
});

const  MainNavigator = createAppContainer(AppNavigator);

export default class App extends Component<Props> {
  render() {
    return (
      <MainNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

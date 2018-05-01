/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import Form from './app/components/Form';
import Login from './app/components/Login';
import Profile from './app/components/Profile';
import Item from './app/components/Item';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Application = StackNavigator({

  Home: { screen: Login},
  Profile: { screen: Profile},
  Item: { screen: Item},
  }, { 
    navigationOptions: {
      header: false,
    }

});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        //<ImageBackground style= {styles.container} source={require('./app/img/bg.jpg')}>
          <Application/>
        //</ImageBackground>
        //<KeyboardAvoidingView behavior= 'padding' style = { styles.wrapper}>
        //  <ImageBackground style= {styles.container} source={require('./app/img/bg.jpg')}>
        //    <Text style = {styles.header}> - LOGIN - </Text>
        //    <Form />
       //   </ImageBackground>
       // </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  wrapper:
  {
    flex: 1,
  },
  container:
  {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',
    alignItems: 'center',

  },
  header: 
  {
    fontSize: 38,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 80,
  }
});

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
  TextInput,
  TouchableOpacity,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Form extends Component<Props> {
  render() {
    return (
        <View style = {styles.formContainer} >
            <TextInput 
            placeholder='Username'
            style={styles.textInput}
            underlineColorAndroid={'transparent'}/>
             <TextInput 
             placeholder='Password'
             secureTextEntry={true}
            style={styles.textInput}
            underlineColorAndroid={'transparent'}/>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.btntext}>Log in</Text>
            </TouchableOpacity>


        </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: 
  {
    alignSelf: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInput: 
  {
    alignSelf: 'stretch',
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.8)',
    marginBottom: 20,
  },
  button: 
  {
    alignSelf: 'stretch',
    marginTop: 20,
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    padding: 20,
  },
  btntext:
  {
    color: '#fff',
    fontSize: 18,
  }
});

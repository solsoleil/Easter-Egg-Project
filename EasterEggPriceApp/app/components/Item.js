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
  AsyncStorage,
} from 'react-native';


export default class Item extends Component<Props> {
  constructor(props){
    super(props);
    this.state={

      isLoading: true,
      dataSource: AsyncStorage.getItem('myItems')
    }
  }

  render() {
    return (
        <View style={styles.container}>
          
          <Text style={styles.text}>{dataSource[0].nome}</Text>

        </View>

    );
  }

}

const styles = StyleSheet.create({
 
 container:
 {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#2896d3',
 },
 text:
 {
  color: '#fff',

 }

});

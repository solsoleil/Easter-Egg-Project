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
  FlatList,
  ListItem,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';


export default class Profile extends Component<Props> {
  

  constructor(props){
    super(props);
    this.state={
      dataSource: [{}]
    }
  }

  //componentDidMount(){
  //  this.checkUsers();
  //  this._loadInitialState().done();
  //}

  //_loadInitialState = async () =>  {

  //  var value = await AsyncStorage.getItem('user');
  //  if(value !== null){
  //    this.props.navigator.navigate('Profile');
  //  }

  //}

  render() {
    const { navigate } = this.props.navigation; 
    return (
        <View style={styles.container}>
          
          <Text>WELCOME</Text>
          <TouchableOpacity 
            style={styles.btn}
            onPress={this.checkUsers}>
            <Text> Log in</Text>
          </TouchableOpacity>
           

        </View>

    );
  }

  checkUsers = () => {
    //alert(this.state.username + 'teste');
    fetch('http://192.168.25.6:3000/data/mockedData')
    .then(function(response)
    {
      return response.json();
    })
    .then(function(myArray){
      //alert(myArray[0].nome);
      AsyncStorage.setItem('myItems', myArray);
      this.props.navigation.navigate('Item');
      //this.setState({dataSource: JSON.stringify(myArray)});
    }).catch(error => {
      alert(error);
    });
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

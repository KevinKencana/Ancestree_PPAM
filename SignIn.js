import { StatusBar } from 'expo-status-bar';
import { Image,  StyleSheet, Text, View } from 'react-native';
import logo from "./assets/LogoAncestree.png";
import React, { Component } from 'react';
import { Alert, Button, TextInput } from 'react-native';
import {user} from "./Signup.js";
import {NavigationActions, StackActions} from 'react-navigation';

var currentuser = "";

export { currentuser}

const Separator = () => (
  <View style={styles.separator} />
);

//const user = require('./data_user.json')
//const userArray = user.user

export default class Signin extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  back(){
    let resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Login'})],
      key: null,
    });
    this.props.navigation.dispatch(resetAction);
  }
  onLogin() {
    const { username, password } = this.state;
    if (!username) {
      alert('Please fill Name');
      return;
    }
    if (!password) {
      alert('Please fill Password');
      return;
    }
    //if(userArray.some(e => e.username == username)) {
      //if(userArray.some(e => e.password == password, e => e.username == username))
    if(user.some(e => e.username == username)) {
      if(user.some(e => e.password == password, e => e.username == username)) {
        currentuser = username;
        let resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: 'Home'})],
          key: null,
        });
        this.props.navigation.dispatch(resetAction);
      }
      else{
        alert("Password is incorrect");
        return;
      }
    }
    else{
      alert("Username isn't registered");
      return;
    }

  }

  render() {
  return (
    <View style={styles.container}>
      <View styles={styles.container}>
      <Button
          title={'Back'}
          color={'orange'}
          justifyContent={"flex-end"}
          width={20}
          height={50}
          onPress={this.back.bind(this)}
        />
      </View>
      <View style={styles.containerlain}>
      <Image source={logo} style={{ width: 300, height: 300 }} /> 
      <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          justifyContent={"center"}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          color={'steelblue'}
          onPress={this.onLogin.bind(this)}
          marginBottom={10}
        />
      <StatusBar style="auto" />
      </View>
    </View>
  );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  containerback: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  containerlain: {
    flex:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  separator: {
    marginVertical: 20,
  }
});


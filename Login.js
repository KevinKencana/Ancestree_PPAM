import { StatusBar } from 'expo-status-bar';
import { Image,  StyleSheet, Text, View } from 'react-native';
import loginscreen from "./assets/LoginScreen.png";
import React, { Component } from 'react';
import { Alert, Button, TextInput } from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';

const Separator = () => (
  <View style={styles.separator} />
);

export default class Login extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  Signin() {
    let resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Signin'})],
      key: null,
    });
    this.props.navigation.dispatch(resetAction);
  }

  Signup(){
    let resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Signup'})],
      key: null,
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
  return (
    <View style={styles.container}>
      <View>
      <Image source={loginscreen} style={{ width: 400, height: 400 }} /> 
      <Text style={styles.logintext}>Memories of your family.</Text>
      <Text style={styles.logintext}>Stored in one place.</Text>
      <Separator></Separator>
      <Button 
          title={"Sign up"}
          titleSize = {20}
          style={styles.input}
          marginBottom={10}
          color={'#5142ab'}
          onPress={this.Signup.bind(this)}
        />
        <Separator></Separator>
        <Button
          title={'Login'}
          titleSize = {20}
          style={styles.input}
          color={'steelblue'}
          onPress={this.Signin.bind(this)}
          marginTop={10}
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
  containerback:
  {flex:1,
  },
  logintext:{
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontWeight: "700",
    fontSize: 30
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  transparan:{
    width: 200,
    height: 44,
    padding: 10,
    marginBottom: 10,
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    borderColor: 'purple',
    backgroundColor: 'purple',
    borderRadius: 20
  }
});


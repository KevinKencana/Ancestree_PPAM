import { StatusBar } from 'expo-status-bar';
import { Image,  ScrollView, StyleSheet, Text, View } from 'react-native';
import logo from "./assets/LogoAncestree.png";
import React, { Component } from 'react';
import { Alert, Button, TextInput } from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';

var user = [
  {
    "username": "budiarto",
    "password": "papa",
    "name": "Budiarto",
    "familyname": "Kim",
    "placeofbirth":"Medan",
    "birthdate":"29/01/1964",
    "medicalhistory": "kolestrol"  
  },
  {
  "username": "lieching69",
    "password": "mama",
    "name": "Lie Ching",
    "familyname": "Ng",
    "placeofbirth":"Medan",
    "birthdate":"10/06/1969",
    "medicalhistory": "kolestrol" 
  },{
  "username": "hong",
    "password": "kucing",
    "name": "Hong",
    "familyname": "Meow",
    "placeofbirth":"Bandung",
    "birthdate":"20/2/2022",
    "medicalhistory": "Kutu, Jamuran, Pilek, Cakar pemilik pas mandi pertama"
} 
]

export {user}

export default class Signup extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      name: '',
      familyname: '',
      placeofbirth:'',
      birthdate:'',
      medicalhistory: ''
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
  
  onRegister() {
    const { username, password, name, familyname,placeofbirth, birthdate, medicalhistory } = this.state;

    if (!username) {
      alert('Please fill Username');
      return;
    }
    if (!password) {
      alert('Please fill Password');
      return;
    }
    if (!name) {
      alert('Please tell us your Name');
      return;
    }
    if (!familyname) {
      alert('Please tell us your Family Name');
      return;
    }
    if (!placeofbirth) {
      alert('Please tell us your Place of Birth');
      return;
    }
    if (!birthdate) {
      alert('Please tell us your Birth Date');
      return;
    }

    user.push({"username": username, "password":password, "name": name, "familyname":familyname, "placeofbirth":placeofbirth, "birthdate":birthdate,medicalhistory})

    alert('User has been registered');
    //this.returnSignin.bind(this)
    let resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Signin'})],
      key: null,
    });
    this.props.navigation.dispatch(resetAction);
  }
  render() {
  return (
    <View style={styles.container}>
      <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Button
          title={'Back'}
          style={styles.input}
          color={'steelblue'}
          onPress={this.back.bind(this)}
        />
        <Image source={logo} style={{ width: 300, height: 300 }} /> 
      </View>
      <ScrollView style={{flex:10}}>
      <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          placeholder={'What do we call you?'}
          style={styles.input}
        />
        <TextInput
          value={this.state.familyname}
          onChangeText={(familyname) => this.setState({ familyname })}
          placeholder={"What's your family name?"}
          style={styles.input}
        />
        <TextInput
          value={this.state.placeofbirth}
          onChangeText={(placeofbirth) => this.setState({ placeofbirth })}
          placeholder={"Where were you born?"}
          style={styles.input}
        />
        <TextInput
          value={this.state.birthdate}
          onChangeText={(birthdate) => this.setState({ birthdate })}
          placeholder={"When were you born? (DD/MM/YYYY)"}
          style={styles.input}
        />
        <TextInput
          value={this.state.medicalhistory}
          onChangeText={(medicalhistory) => this.setState({ medicalhistory })}
          placeholder={"Do you have medical history you'd like your family to know about?"}
          style={styles.input}
        />
        
        <Button
          title={'Register'}
          style={styles.input}
          onPress={this.onRegister.bind(this)}
        />
      <StatusBar style="auto" />
      </ScrollView>
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
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});


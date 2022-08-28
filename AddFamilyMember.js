import { StatusBar } from 'expo-status-bar';
import { Image,  StyleSheet, Text, View } from 'react-native';
import logo from "./assets/LogoAncestree.png";
import React, { Component } from 'react';
import { Alert, Button, TextInput } from 'react-native';
import {user} from "./Signup";
import {NavigationActions, StackActions} from 'react-navigation';


var usrnme = ""
var gender = ""
var gen;
var tree = [ {
  "username": "kevinganteng",
  "name": "Kevin",
  "familyname": "Kencana",
  "role": "self",
  "gender": "male",
  "generation": 10
}]
export {tree}

const relation = ['Husband','Wife','Father','Mother','Male Cousin','Female Cousin','Uncle','Aunt','Grandpa','Grandma','Son','Daughter']

export default class Signup extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      familyname: '',
      role: ''
    };
  }
  back(){
    let resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Home'})],
      key: null,
    });
    this.props.navigation.dispatch(resetAction);
  }
  onAdd() {
    const { name, familyname, role} = this.state;

    if (!name) {
      alert('Please tell us your Name');
      return;
    }
    if (!familyname) {
      alert('Please tell us your Family Name');
      return;
    }
    if ((!relation.includes(role))) {
      alert('Please fill in an actual relationship!');
      return;
    }
    if(user.some(e => e.name == name, e => e.familyname == familyname)) {
      const index = user.find(e => e.name == name, e => e.familyname == familyname)
      usrnme = index.username
    } 
    if (role == "Husband" || role == "Father" || role == "Male Cousin" || role == "Uncle" || role == "Grandpa" || role == "Son"){
      gender = "male"
    }
    else{
      gender = "female"
    }

    if (role == "Father" || role == "Mother" || role == "Uncle" || role == "Aunt"){
      gen = 11
    }
    else if (role == "Male Cousin" || role == "Female Cousin" || role == "Husband" || role == "Wife"){
      gen = 10
    }
    else if (role == "Grandpa" || role == "Grandma"){
      gen = 12
    }
    else if (role == "Son" || role == "Daughter"){
      gen = 9
    }

    tree.push({'username': usrnme, 'name': name, 'familyname': familyname, 'role': role, 'gender': gender, 'generation': gen})
    tree.sort(function(a, b) {
      return parseFloat(b.generation) - parseFloat(a.generation);
    });

    alert('Family member has been added!');
    let resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Home'})],
      key: null,
    });
    this.props.navigation.dispatch(resetAction);
    //this.returnSignin.bind(this)
  }
  render() {
    //this.props.navigation.reset();
  return (
    <View style={styles.container}>
      <View>
      <Button
          title={'Back'}
          style={styles.input}
          color={'steelblue'}
          onPress={this.back.bind(this)}
        />
      </View>
      
      <Image source={logo} style={{ width: 300, height: 300 }} /> 
      <TextInput
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          placeholder={"What's their name?"}
          style={styles.input}
        />
        <TextInput
          value={this.state.familyname}
          onChangeText={(familyname) => this.setState({ familyname })}
          placeholder={"What's their family name?"}
          //secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.role}
          onChangeText={(role) => this.setState({ role })}
          placeholder={"What's their relationship with you?"}
          //secureTextEntry={true}
          style={styles.input}
        />
        <Text style={{fontSize:10}}>Type either Father, Mother, Son, Daughter, Grandpa, Grandma, Uncle, Aunt, Male Cousin, or Female Cousin</Text>
        
        <Button
          title={'Add Family Member'}
          style={styles.input}
          onPress={this.onAdd.bind(this)}
        />
      <StatusBar style="auto" />
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


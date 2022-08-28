import { StatusBar } from 'expo-status-bar';
import { SectionList, Image,  StyleSheet, Text, View } from 'react-native';
import logo from "./assets/LogoAncestree.png";
import React, { Component } from 'react';
import { Alert, Button, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import pp from "./assets/profilepicture.png";
import {tree} from "./AddFamilyMember.js";
import {user} from "./Signup";
import {currentuser} from "./SignIn";
import {NavigationActions, StackActions} from 'react-navigation';
import bg from "./assets/backgroundhome.jpg"

const Separator = () => (
  <View style={styles.separator} />
);
//{ tree.map((item, key) => {
  //return (
    //<View key={key}>
      //  <Text>{item.name} {item.familyname}<Image source={logo} style={{width:20, height:20}}></Image></Text>
    //</View>
  //);
//})} 
var searchname;
var searchfamilyname;
export {searchname}
export {searchfamilyname}

var relate;
var min = tree[0]['generation'];
var max = tree[tree.length-1]['generation'];

export default class Home extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      familyname: '',
    };
  }

  cs(){
    alert('Please contact 081806772068 with your inquiry!')
    return;
  }

  search(){
    const { name, familyname } = this.state;
    if (!name) {
      alert('Please tell us their Name');
      return;
    }
    if (!familyname) {
      alert('Please tell us their family Name');
      return;
    }

    searchname = name;
    searchfamilyname = familyname;

    if(tree.some(e => e.name == name, e => e.familyname == familyname)) { 
      let resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Info'})],
        key: null,
      });
      this.props.navigation.dispatch(resetAction);
    }
    else{
      alert("The person you're trying to search for isn't in your family tree yet!")
      return;
    }
  }

  edit(){
    let resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Edit'})],
      key: null,
    });
    this.props.navigation.dispatch(resetAction);
  }

  logout(){
    let resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Login'})],
      key: null,
    });
    this.props.navigation.dispatch(resetAction);
  }

  onAdd(){
    let resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Add'})],
    key: null,
  });
  this.props.navigation.dispatch(resetAction);
  }

  render() {
    //this.props.navigation.reset();
  return (
    
    <View style={styles.container1}>
      <View style={styles.container1}>
        <View style={{flex:1,flexDirection:"row"}}>
      <Button
          title={'Logout'}
          //style={styles.round}
          style={{fontSize:10}}
          onPress={this.logout.bind(this)}
        />
        </View>
        <Separator></Separator>
        <View style={{flex:1, flexDirection:"row"}}>
        <Button
          title={'Customer Support'}
          style={styles.round}
          onPress={this.cs.bind(this)}
        />
        </View>
      </View>
      
      <View style={styles.container2}>
      <Text style={{fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: "300",
    fontSize: 30,position: 'absolute', top: 30, right: 100}}>Hi, {currentuser}</Text>
      <Text style={{fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: "200",
    fontSize: 15,position: 'absolute', top: 60, right: 0}}>Have a look at your family tree!</Text>
    <Image source={pp} style={{position: 'absolute', top: 30, left: 165, width: 50, height: 50, borderRadius:50 }} /> 
      { tree.map((item, key) => {
    return (
      <View key={key}>
        <Text>{item.name} {item.familyname}<Image source={logo} style={{width:20, height:20}}></Image></Text>
    </View>
  );
})} 

    </View>
    
    
    <View style={styles.container2}>
      <Text>See information on someone in your family tree!</Text> 
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
        <Button
          title={'Search!'}
          style={styles.round}
          onPress={this.search.bind(this)}
        />

    <Separator></Separator>
    <Text>Or you can also do:</Text>
      <Separator></Separator>
      <Button
          title={'Add a family member!'}
          style={styles.round}
          onPress={this.onAdd.bind(this)}
        />
        <Separator></Separator>
        <Button
          title={'Edit your personal data'}
          style={styles.round}
          onPress={this.edit.bind(this)}
        />
        
        </View>
    </View>
    
    
  );
  };
};


const styles = StyleSheet.create({
  container1: {
    flexDirection: 'column',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  container2: {
    flexDirection: 'column',
    flex:7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingBottom: 10
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  round: {
    width: 500,
    height: 440,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 50,
    fontSize: 10
  },
  bigtext:{   
    fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: "300",
    fontSize: 30
  },
  separator: {
    marginVertical: 5,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  smalltext:{   
    fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: "200",
    fontSize: 10
  },
  profilepicture: {
    position: 'absolute',
    top: 30,
    bottom: 0,
    left: 100,
    right: 0
  }
});


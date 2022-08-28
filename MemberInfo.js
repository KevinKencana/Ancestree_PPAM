import { StatusBar } from 'expo-status-bar';
import { SectionList, Image, ScrollView,  StyleSheet, Text, View } from 'react-native';
import logo from "./assets/LogoAncestree.png";
import React, { Component } from 'react';
import { Alert, Button, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import pp from "./assets/profilepicture.png";
import {tree} from "./AddFamilyMember.js";
import {user} from "./Signup";
import {currentuser} from "./SignIn";
import {NavigationActions, StackActions} from 'react-navigation';
import { searchname } from './Home';
import { searchfamilyname } from './Home';
import ppf from "./assets/profilepicturefather.jpg";

var indextree;
var indexuser;

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
export default class Memberinfo extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      familyname: '',
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

  render() {
    let picture = ppf;
    indexuser = user.find(e => e.name == searchname, e => e.familyname == searchfamilyname)
    indextree = tree.find(e => e.name == searchname, e => e.familyname == searchfamilyname)
    if(searchname=="Kevin"){
      picture = pp;
    }
    //this.props.navigation.reset();
  return (
    <View style={styles.container}>
        <View style={styles.container2}>
        <Image source={picture} style={{ width: 400, height: 320 }}></Image>
        </View>
      <ScrollView style={{flex:1}}>
      <Text style={{fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: "200",
    fontSize: 15}}>Full Name:</Text>
    <Text style={{fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: "300",
    fontSize: 30}}>{indexuser.name} {indexuser.familyname}</Text>
    <Separator></Separator>
    <Text style={{fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: "200",
    fontSize: 15}}>Place/Date of Birth:</Text>
    <Text style={{fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: "300",
    fontSize: 30}}>{indexuser.placeofbirth}/ {indexuser.birthdate}</Text>
    <Separator></Separator>
    <Text style={{fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: "200",
    fontSize: 15}}>Relationship:</Text>
    <Text style={{fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: "300",
    fontSize: 30}}>{indextree.role}</Text>
    <Separator></Separator>
    <Text style={{fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: "200",
    fontSize: 15}}>Medical History:</Text>
    <Text style={{fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: "300",
    fontSize: 30}}>{indexuser.medicalhistory}</Text>
      </ScrollView>
      
    <View style={styles.container1}>
    <View>
        <Button
          title={'Go back to the home screen'}
          style={styles.round}
          onPress={this.back.bind(this)}
        />
    </View>
    </View>
    </View>
    
  );
  };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#FFFFFF',
      },
    container1: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  container2: {
    flexDirection: 'column',
    flex: 2,
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
  round: {
    width: 500,
    height: 440,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 50
  },
  bigtext:{   
    fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: "300",
    fontSize: 30
  },
  separator: {
    marginVertical: 20,
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


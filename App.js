import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import signin from "./SignIn";
import home from "./Home";
import signup from "./Signup";
import login from "./Login";
import add from "./AddFamilyMember";
import info from "./MemberInfo";
import edit from "./Edit"

//NODE_OPTIONS --max-old-space-size=4096
const AppNavigator = createStackNavigator({
  Login: {
    screen: login
  },
  Signin: {
    screen: signin
  },
  Home: {
    screen: home
  },
  Signup: {
    screen: signup
  },
  Add: {
    screen: add
  },
  Info: {
    screen: info
  },
  Edit:{
    screen: edit
  }
});

export default createAppContainer(AppNavigator);
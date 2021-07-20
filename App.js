import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Detail from "./Screens/detail"
import Home from "./Screens/home"
import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
export default class App extends React.Component {
  render(){
    return(
    <AppContainer/>
    )
  }
  
}

const AppStackContainer = createStackNavigator({
  Home:{screen:Home},
  Detail:{screen:Detail}

},{
  initialRouteName:"Home"
})

var AppContainer = createAppContainer(AppStackContainer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

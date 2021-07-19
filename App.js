import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Detail from "./Screens/detail"
import Home from "./Screens/home"
export default class App extends React.Component {
  render(){
    return(
      <View>
        <Text>App</Text>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

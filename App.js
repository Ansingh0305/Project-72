import React, { Component } from 'react';
import { TextInput, View ,StyleSheet, Text, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation';
import ReadStory from './screens/ReadStoryScreen';
import WriteStory from './screens/WriteStoryScreen';
export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const tabNavigator=createBottomTabNavigator({
  Read:{ screen: ReadStory},
  Write:{screen: WriteStory}
},
{
defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ()=>{
    const routeName = navigation.state.routeName;
    console.log(routeName)
    if(routeName === "Read"){
      return(
        <Image
        source={require("./read.png")}
        style={{width:40, height:40}}
      />
      )

    }
    else if(routeName === "Write"){
      return(
        <Image
        source={require("./write.png")}
        style={{width:40, height:40}}
      />)

    }
  }
})}
);
const AppContainer=createAppContainer(tabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

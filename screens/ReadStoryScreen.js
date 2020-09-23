import React from 'react';
import {Text, StyleSheet, View, } from 'react-native';

export default class ReadStory extends React.Component{
    render(){
        return(
            <View styles={styles.view}>
            <Text styles={{textAlign:'center'}}>Read A Story</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view:{
        textAlign:"center",
        fontSize:30,
        justifyContent:"center",
        fontWeight:"bold"
    }
})
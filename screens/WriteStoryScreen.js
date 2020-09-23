import React from 'react';
import {Text, StyleSheet,View, TextInput,TouchableOpacity,KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { Header } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config.js';

export default class WriteStory extends React.Component{
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            story:''
        }
    }
    submitStory=()=>{
        db.collection("stories").doc("user1").update({
            'title':this.state.title,
            'author':this.state.author,
            'story':this.state.story
        })
        ToastAndroid.show('The Story Was Submitted', ToastAndroid.SHORT)
    }
    
    render(){
        return(
            <KeyboardAvoidingView style={styles.view} behavior="padding" enabled >
            
                <Header backgroundColor={'pink'}
        centerComponent={{
          text:"Write A Story",
          style:{fontSize:18, fontFamily:"bold"}
        }}/>
            <TextInput
          style={styles.inputBox}
          placeholder="Title of the story"
          onChangeText={(text)=>{
              this.setState({title:text})
          }}
          value={this.state.title}
         />
            <TextInput
          style={styles.inputBox}
          placeholder="Author"
          onChangeText={(text)=>{
            this.setState({author:text})
        }}
        value={this.state.author}
         />
          <TextInput
          multiline
          style={[styles.inputBox,{height:200}]}
          placeholder="Write your story"
          onChangeText={(text)=>{
            this.setState({story:text})
        }}
        value={this.state.story}
          />
         <TouchableOpacity style={styles.submitButton} onPress={this.submitStory}>
         <Text style={{textAlign:'center', fontSize:20,fontWeight:'bold'}}>Submit</Text>
         </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    inputBox:{
        width: 300,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
         textAlign:'center',
        marginTop:10,
        marginLeft:10},

        submitButton:{
            backgroundColor: '#FBC02D',
            width: 100,
            height:50,
            textAlign:"center",
            justifyContent:"center",
            marginLeft:110,
            marginTop:20
          },
    })

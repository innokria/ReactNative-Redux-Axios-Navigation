import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native';

export default class Friend extends React.Component {

  
  render() {
    return (
     <WebView


       source={{uri: 'https://www.google.com'}} 
    
       startInLoadingState={true}
       scalesPageToFit={true}
    />
    );
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
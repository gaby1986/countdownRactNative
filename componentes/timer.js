import React, { Component } from "react";
import {  StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import CountDown from 'react-native-countdown-component';


class MyTime extends Component {
  constructor (props) {
    super(props);
    
    
  }


  render() {
        return (
        <CountDown
            until={5000000}
            onFinish={() => alert('finished')}
            onPress={() => alert('hello')}
            size={20}
            timeToShow={['S']}
            timeLabels={{m: 'MM', s: 'segundos'}}
        />
        )
    }
}
 
export default MyTime;
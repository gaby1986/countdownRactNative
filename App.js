import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Menu from './componentes/header';
import DeCron from './componentes/DeCron';
import MyTime from './componentes/timer';


export default function App() {
  return (
    <View style={styles.container}>  
        <Menu/>
        <View style={{flex:1, backgroundColor:'red'}}/>
        <DeCron></DeCron>         
        <MyTime></MyTime>
        <View style={{flex:1, backgroundColor:'green'}}/>
        <View style={{flex:1, backgroundColor:'black'}}/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

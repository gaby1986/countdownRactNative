import React, { Component } from 'react';
import {  StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
 
class Menu extends Component{
    render(){
        return(
            <View style={styles.container}>                          
                  <Text style={styles.textHader}>Header</Text>      
                    <TouchableHighlight onPress={(this.onLogin.bind(this))}>
                        <Text style={styles.btnHader}>Login</Text> 
                    </TouchableHighlight>   
            </View>
 
        )
    
    }

    onLogin(){
        console.log("test");
        Alert.alert(
            'Acceso',
            'Te has logeado en el sistema',
            [
                {
                    text: 'Aceptar',
                    onPress: (this.aceptar.bind(this))
                },
                {
                    text: 'Cancelar',
                    onPress: (this.cancelar.bind(this))
                }
            ]
        )
    }
    aceptar(){
        console.log("Login aceptado")
    }
    cancelar(){
        console.log("Login cancelado")
    }
        
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        padding:10,
        height:120,
    },
    textHader:{
        textAlign:"center",
        textAlignVertical:"center",
        paddingTop: 50,
        color:'grey',
    },
    btnHader:{
        backgroundColor:'blue',
        width:100,
        textAlign: 'center',
        padding:5,
        color:'#fff',
        borderRadius: 3,
        alignItems:'center',
    }
})

export default Menu;
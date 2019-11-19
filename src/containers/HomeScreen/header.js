import React, {Component} from "react";
import { View, Image, Text } from "react-native";

class Header extends Component{
    render(){
        return(
            <View style={{height:24, flexDirection:'row'}}>
                <View style={{flex:1, marginLeft:10, marginTop:10}}><Text>Poin : 0</Text></View>
                <View style={{flex:1, alignItems:'center'}}><Image style={{height:48,width:66}}source={require('../../assets/images/logo/logo_header.png')}></Image></View>
                <View style={{flex:1}}></View>
            </View>
        );
    }
}

export default Header;
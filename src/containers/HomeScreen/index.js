import React, {Component} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import Header from './header';
import SliderMenu from './sliderMenu';

import Icon from 'react-native-vector-icons/dist/Ionicons';

export default class HomeScreen extends Component {
  
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{height:72}}><Header /></View>
        <ScrollView style={{flex:1}}>
          <View style={{height:180}}>
            <View style={{width:'100%',flex:1, backgroundColor:"#FFFFFF"}}>
              <SliderMenu />
            </View>
          </View>
          <View style={{height:144, justifyContent:'center', alignItems:'center', backgroundColor:'#00FF00'}}>
            <Text>center</Text>
          </View>
          <View style={{height:144, justifyContent: 'center' , alignItems:'center', backgroundColor: '#0000FF'}}>
            <View>
            <Button
              title="Go to About"
              onPress={() => this.props.navigation.navigate('AboutScreen')}
            />
            </View>
          </View>
          <View style={{ height: 144, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFF00' }}>
            <View>
              <Button
                title="Go to About"
                onPress={() => this.props.navigation.navigate('AboutScreen')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

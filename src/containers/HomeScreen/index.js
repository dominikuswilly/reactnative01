import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Header from './header';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{height:56}}><Header /></View>
        <View style={{flex:1, alignItems:'center'}}>
          <Text> Homepage </Text>
        </View>
        <View style={{flex:1}}>
          <Icon name='logo-facebook' size={20} />
        </View>
        <View style={{flex:1, marginLeft:'10%', marginRight:'10%'}}>
          <Button
            title="Go to About"
            onPress={() => this.props.navigation.navigate('AboutScreen')}
          />
        </View>
      </View>
    );
  }
}

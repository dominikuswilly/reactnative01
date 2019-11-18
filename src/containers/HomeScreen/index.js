import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Homepage </Text>
        <Button
          title="Go to About"
          onPress={() => this.props.navigation.navigate('About')}
        />
      </View>
    );
  }
}

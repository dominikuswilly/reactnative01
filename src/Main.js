import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

// import {
//     StackNavigator
// } from 'react-navigation';
// //Imported Scenes
// import Login from './views/login/index';
// import Signup from './views/signup/index';
// const App = StackNavigator({
//     Login: { screen: Login },
//     Signup: { screen: Signup },
// });

class Page1 extends Component {
  render() {
    return (
      <View>
        <Text>A</Text>
      </View>
    );
  }
}

class Page2 extends Component {
  render() {
    return (
      <View>
        <Text>B</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Page1: {screen: Page1},
    Page2: {screen: Page2},
  },
  {
    initialRouteName: 'Page2',
  },
);

const App = createAppContainer(AppNavigator);

export default App;

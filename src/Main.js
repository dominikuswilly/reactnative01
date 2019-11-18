import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from './containers/HomeScreen';
import AboutScreen from './containers/AboutScreen';
import ContactScreen from './containers/ContactScreen';
import Config from 'react-native-config';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

// const AppNavigator = createStackNavigator(
//   {
//     HomeScreen: {screen: HomeScreen},
//     AboutScreen: {screen: AboutScreen},
//     ContactScreen: {screen: ContactScreen},
//   },
//   {
//     initialRouteName: 'HomeScreen',
//   },
// );

const MainTabs = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'HOME',
    },
  },
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: 'ABOUT',
    },
  },
  ContactScreen: {
    screen: ContactScreen,
    navigationOptions: {
      tabBarLabel: 'CONTACT',
    },
  },
});

const MainDrawer = createDrawerNavigator({
  MainTabs: MainTabs,
});

const AppModalStack = createStackNavigator(
  {
    App: MainDrawer,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const AppNavigator = createSwitchNavigator({
  App: {
    screen: AppModalStack,
  },
});

const App = createAppContainer(AppNavigator);

export default App;

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from './containers/HomeScreen';
import AboutScreen from './containers/AboutScreen';
import ContactScreen from './containers/ContactScreen';
import Config from 'react-native-config';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

const HomeStack = createStackNavigator(
  {
    HomeScreen: {screen: HomeScreen},
    AboutScreen: {screen: AboutScreen},
    ContactScreen: {screen: ContactScreen},
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  },
);

const MainTabs = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Beranda',
      },
    },
    AboutScreen: {
      screen: AboutScreen,
      navigationOptions: {
        tabBarLabel: 'Keranjang',
      },
    },
    ContactScreen: {
      screen: ContactScreen,
      navigationOptions: {
        tabBarLabel: 'Polis',
      },
    },
    AkunScreen: {
      screen: ContactScreen,
      navigationOptions: {
        tabBarLabel: 'Akun',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#FF0000',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#FFFFFF',
      },
    },
  },
);

const MainDrawer = createDrawerNavigator({
  MainTabs: MainTabs,
  HomeStack: HomeStack,
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

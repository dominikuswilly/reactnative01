import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from './containers/HomeScreen';
import AboutScreen from './containers/AboutScreen';
import ContactScreen from './containers/ContactScreen';
import Config from 'react-native-config';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

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


const MainTabs2 = createMaterialBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Beranda',
        tabBarOptions:{
          showIcon: true,
        },
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
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'HomeScreen') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else  {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    initialRouteName: 'HomeScreen',
    shifting: false,
    labeled:true,
    activeColor:'#FF0000',
    labelStyle:{
      fontSize:12,
    },
    barStyle:{
      backgroundColor:'#FFFFFF',
    },  
  }
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
  MainTabs2: MainTabs2,
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

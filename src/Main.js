import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './containers/HomeScreen';
import AboutScreen from './containers/AboutScreen';
import ContactScreen from './containers/ContactScreen';
import Config from 'react-native-config';

const AppNavigator = createStackNavigator(
  {
    HomeScreen: {screen: HomeScreen},
    AboutScreen: {screen: AboutScreen},
    ContactScreen: {screen: ContactScreen},
  },
  {
    initialRouteName: 'HomeScreen',
  },
);

const App = createAppContainer(AppNavigator);

export default App;

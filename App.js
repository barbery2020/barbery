// Import the screens
import Main from './components/Main';
import Chat from './components/Chat';
import {createAppContainer} from 'react-navigation';
// Import React Navigation
import { createStackNavigator } from 'react-navigation-stack'

// Create the navigator
const navigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});

// Export it as the root component
export default createAppContainer(navigator)

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
    Search : SearchScreen,
    ResultsSearch : ResultsShowScreen
  }, {
    initialRouteName : 'Search',
    defaultNavigationOptions : {
      title : 'Food Search Application'
    }
  });

export default createAppContainer(navigator);

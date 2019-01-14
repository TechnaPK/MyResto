import Home from '../screens/Home'
import Settings from '../screens/Settings'
import Details from '../screens/Details'

// import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

const HomeStack = createStackNavigator(
    {
        Home: Home,
        Details: Details
    }, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#3F51B5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }

);

const MainDrawerNavigator = createDrawerNavigator(
    {
        Home: HomeStack,
        Settings: Settings,
    },
    {
        initialRouteName: 'Home'
    }
);

const AppNavigator = createAppContainer(MainDrawerNavigator)
export default AppNavigator

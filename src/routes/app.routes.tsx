import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import {Image} from 'react-native';

// import FeatherIcon from 'react-native-vector-icons/Feather';

// import Dashboard from '../pages/Dashboard';
// import Cart from '../pages/Cart';

// import Logo from '../assets/logo.png';
// import Home from '../pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import TabRotues from './tab.routes';
const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: {backgroundColor: '#EBEEF8'},
      }}
      // initialRouteName="Dashboard"
    >
      <App.Screen
        name="MainBottom"
        component={TabRotues}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
        // options={{
        //   headerShown: true,
        //   headerTransparent: true,
        //   // headerTitle: () => <Image source={Logo} />,
        // }}
        // name="Dashboard"
        // component={Home}
      />
      {/* <App.Screen
      options={{
        headerTransparent: true,
        headerTitle: () => <Image source={Logo} />,
        headerBackTitleVisible: false,
        headerLeftContainerStyle: {
          marginLeft: 20,
        },

        headerBackImage: () => <FeatherIcon name="chevron-left" size={24} />,
      }}
      name="Cart"
      component={Cart}
    /> */}
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;

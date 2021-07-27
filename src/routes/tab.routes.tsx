import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../pages/Home';
import Transactions from '../pages/Transactions';
const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelPosition: 'beside-icon',
      activeTintColor: '#1b36e7',
      labelStyle: {
        fontSize: 12,
        fontWeight: '600',
      },
      showLabel: true,

      style: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
      },
      inactiveTintColor: '#B7B7CC',
    }}>
    <Tab.Screen
      options={{
        tabBarIcon: ({color}) => (
          <Icon size={25} name="account-balance-wallet" color={color} />
        ),
        title: '',
      }}
      name="Dashboard"
      component={Home}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({color}) => <Icon size={25} name="list" color={color} />,
        title: '',
      }}
      name="Transactions"
      component={Transactions}
    />
  </Tab.Navigator>
);

export default TabRoutes;

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/landingScreen/HomeScreen';
import LoginScreen from '../screens/loginScreen/loginScreen';
import { ProductList } from '../components/products/productList';
import  Initial  from '../screens/checkScreen/initial';
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Check : Initial,
    Login: LoginScreen,
    Main: HomeScreen,
  })
);
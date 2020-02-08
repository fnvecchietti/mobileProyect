import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/landingScreen/HomeScreen';
import LoginScreen from '../screens/loginScreen/loginScreen';
import { ProductItem } from '../components/products/productItem';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Login: LoginScreen,
    Main: HomeScreen,
    Product : ProductItem
  })
);
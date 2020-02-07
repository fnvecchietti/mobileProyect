import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/landingScreen/HomeScreen';
import { loginForm } from '../components/forms/users/loginForm';
import { ProductList } from '../components/products/productList';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: ProductList,
  })
);


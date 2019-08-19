import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Scanner from './scanner.js';
import Options from './options.js';


const AppNavigator = createStackNavigator(
  {
  	Home:  Scanner,
  	Details: Options
  },
  {
  	initialRouteName: "Home"
  }
);
export const AppNavContainer = createAppContainer(AppNavigator);
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, View, TouchableHighlight, Image, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import WelcomeScreen from "./WelcomeScreen";
import RegisterScreen from "./RegisterScreen";
import UserPageScreen from "./UserPageScreen";
import SellItemScreen from './SellItem'

const navigator = createStackNavigator(
  {
    //shows the most top as default screen
    WelcomeScreen: {
      screen: WelcomeScreen,
      navigationOptions: {
        headerShown: false,
      }
    },
    Registration: {
        screen: RegisterScreen,
        navigationOptions: {
        headerShown: true,
      }
    },
    UserPage: {
        screen: UserPageScreen,
        navigationOptions: {
        headerShown: true,
      }
    },
    SellItem:{
      screen:SellItemScreen,
      navigationOptions:{
        headerShown: true,
      }
    }
  },
);

export default createAppContainer(navigator);

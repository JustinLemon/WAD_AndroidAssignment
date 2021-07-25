import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground} from 'react-native';

import Navigator from "./screens/Navigation";

export default function App(){
  return(
    <Navigator />
  );
}

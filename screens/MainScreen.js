import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground} from 'react-native';

const MainScreen = (props) => {

  
  return (
    <View style={styles.background}>
        <Text>This is MainScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background:{
      backgroundColor: "white",
      flex: 1,
  },

});

export default MainScreen;

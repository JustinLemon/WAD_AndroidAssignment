import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground} from 'react-native';

const RegisterScreen = () => {

  return (
    <View style={styles.defaultBackground}>
        <Text>This is RegisterScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultBackground:{
      backgroundColor: "white",
      flex: 1,
  },
});

export default RegisterScreen;
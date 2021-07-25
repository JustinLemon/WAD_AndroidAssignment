import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground} from 'react-native';

const RegisterScreen = (props) => {

  
  return (
    <View style={styles.background}>
        <Text>This is RegisterScreen</Text>

        <View style={styles.registrationForm}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  background:{
      backgroundColor: "white",
      flex: 1,
  },
  registrationForm:{

  },
});

export default RegisterScreen;

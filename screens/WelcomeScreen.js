import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, View, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Image, TextInput, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const WelcomeScreen = ({navigation}) => {

  const loginHandler = () => {
    console.log("login pressed");
  }

  const registerHandler = () => {
    navigation.navigate("Registration")
  }

  return (

    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
    <View style={styles.container}>
        <ImageBackground resizeMode="contain" source={require("../assets/welcomeBackground.jpg")} 
        style={styles.background} >
        
        <View style={styles.transparentContainer}>
            <Text style={styles.labels}>Username</Text>
            <TextInput style={styles.inputField} />
            <Text style={styles.labels}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.inputField}/>
        </View>

        <View style={styles.touchableContainer}>
            <TouchableHighlight onPress={() => loginHandler()}>
            <View style={styles.loginButton}>
                <Text style={styles.loginText} >LOGIN</Text>
            </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => registerHandler()}>
            <View style={styles.registerButton}>
                <Text style={styles.registerText}>REGISTER</Text>
            </View>
            </TouchableHighlight>
        </View>
        
        </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "tomato",
    height: "100%",
    width: "100%",
  },
  container:{
    flex: 1,
    height: "100%",
    width: "100%",
    position:"absolute",
  },
  touchableContainer:{
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton:{
    backgroundColor: "tomato",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  registerButton:{
    backgroundColor: "gold",
    width: "100%",
    height: 50,  
    justifyContent: "center",
    alignItems: "center",
  },
  loginText:{
    fontWeight: "bold",
    fontSize: 20,
    color: "white"
  },
  registerText:{
    fontWeight: "bold",
    fontSize: 20,
    color: "gray"
  },
  transparentContainer:{
    backgroundColor: "powderblue",
    height: 420,
    width: 300,
    alignSelf: "center",
    marginTop: 230,
    opacity: 0.7,
  },
  labels: {
    alignSelf:"center",
    marginTop: 40,
    fontSize: 20,
    fontWeight: "bold",
  },
  inputField:{
    alignSelf:"center",
    backgroundColor:"white",
    borderWidth: 1,
    width: 150,
    height: 30,
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
    opacity: 1,
  },
});

export default WelcomeScreen;

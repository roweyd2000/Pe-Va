import * as React from "react";
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  View,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import axios from "axios";

const Login = () => {
  const navigation = useNavigation();


  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async () => {
    console.log(name,password);
    try {
     
      const response = await axios.post("http://localhost:3000/login", {
       UserName: name,
        Password:password,

      });
       
      Alert.alert("login success");
      navigation.navigate("Posts");
    } catch (error) {
      console.log(error);
      Alert.alert("Login failed", error.message);
    }
  };


  return (
    <View style={styles.login}>
      <Text style={styles.peVa}>Pe-Va</Text>
      <Text style={styles.allYouNeed}>All you need to vape</Text>
      <Text style={[styles.userName, styles.login2Typo]}>User name</Text>
      <TouchableHighlight
        style={styles.login1}
        underlayColor="#fc0000"
        onPress={()=>{handleLogin()}}
      
      >
        <Text style={[styles.login2, styles.login2Typo]}>Login</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.signUp}
        underlayColor="#ff0000"
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={[styles.signUp1, styles.login2Typo]}>Sign-Up</Text>
      </TouchableHighlight>
      <TextInput
        style={[styles.loginChild, styles.loginLayout]}
        placeholder="UserName"
        keyboardType="default"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={[styles.password, styles.login2Typo]}>Password</Text>
      <TextInput
        style={[styles.loginItem, styles.loginLayout]}
        placeholder="Password"
        keyboardType="default"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  login2Typo: {
    height: 30,
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.lobsterTwoRegular,
  },
  loginLayout: {
    height: 36,
    width: 261,
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_md,
    left: 72,
    position: "absolute",
  },
  peVa: {
    top: 122,
    left: 115,
    fontSize: FontSize.size_2xl,
    color: Color.red,
    width: 162,
    height: 88,
    textAlign: "left",
    fontFamily: FontFamily.lobsterTwoRegular,
    position: "absolute",
  },
  allYouNeed: {
    top: 210,
    left: 178,
    width: 199,
    height: 40,
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.lobsterTwoRegular,
    position: "absolute",
  },
  userName: {
    top: 313,
    left: 149,
    width: 128,
    position: "absolute",
  },
  login2: {
    width: 101,
  },
  login1: {
    left: 176,
    top: 512,
    position: "absolute",
  },
  signUp1: {
    width: 110,
  },
  signUp: {
    left: 167,
    top: 563,
    position: "absolute",
  },
  loginChild: {
    top: 343,
  },
  password: {
    top: 400,
    left: 153,
    width: 124,
    position: "absolute",
  },
  loginItem: {
    top: 430,
  },
  login: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Login;

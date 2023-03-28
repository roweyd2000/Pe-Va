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


const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [age, setAge] = React.useState("");

  const handleSignUP = async () => {
    console.log(name,password,password2,age)
    try {
      const response = await axios.post("http://localhost:3000/User", {
        UserName:name,
        Password:password,
        Age:age
      });
      Alert.alert("signed up with success");
      navigation.navigate("Posts");
    } catch (error) {
      Alert.alert("Sign up  failed", error.message);
    }
  };


  return (
    <View style={styles.signUp}>
      <Text style={styles.peVa}>Pe-Va</Text>
      <Text style={styles.allYouNeed}>All you need to vape</Text>
      <Text
        style={[styles.userName, styles.passwordTypo, styles.userNameLayout]}
      >
        User name
      </Text>
      <TouchableHighlight
        style={styles.login}
        underlayColor="#f90505"
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.login1, styles.passwordTypo]}>Login</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.signUp1}
        underlayColor="#f60c0c"
        onPress={() => {console.log(password,password2); if(password==password2 ){
                                                                                  handleSignUP()
                                                                                
                                                                                }}}
      >
        <Text style={[styles.signUp2, styles.passwordTypo]}>Sign-Up</Text>
      </TouchableHighlight>
      <TextInput
        style={[styles.signUpChild, styles.signLayout, styles.signLayout1]}
        placeholder="username"
        keyboardType="default"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={[styles.age, styles.passwordTypo]}>Age</Text>
      <TextInput
        style={[styles.signUpItem, styles.signLayout]}
        placeholder="Age"
        keyboardType="default"
        autoCapitalize="sentences"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <Text
        style={[styles.password, styles.passwordTypo, styles.userNameLayout]}
      >
        Password
      </Text>
      <TextInput
        style={[styles.signUpInner, styles.signLayout, styles.signLayout1]}
        placeholder="Password"
        keyboardType="default"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text style={[styles.rewritePassword, styles.passwordTypo]}>
        Rewrite Password
      </Text>
      <TextInput
        style={[
          styles.rectangleTextinput,
          styles.signLayout,
          styles.signLayout1,
        ]}
        placeholder="Same Password"
        keyboardType="default"
        value={password2}
        onChangeText={(text) => setPassword2(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  passwordTypo: {
    height: 30,
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.lobsterTwoRegular,
  },
  userNameLayout: {
    width: 106,
    height: 30,
    position: "absolute",
  },
  signLayout: {
    height: 36,
    width: 261,
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  signLayout1: {
    left: 74,
    width: 261,
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_md,
  },
  peVa: {
    top: 118,
    left: 90,
    fontSize: FontSize.size_2xl,
    color: Color.red,
    width: 162,
    height: 81,
    textAlign: "left",
    fontFamily: FontFamily.lobsterTwoRegular,
    position: "absolute",
  },
  allYouNeed: {
    top: 199,
    width: 198,
    height: 57,
    color: Color.black,
    fontSize: FontSize.size_base,
    left: 158,
    textAlign: "left",
    fontFamily: FontFamily.lobsterTwoRegular,
    position: "absolute",
  },
  userName: {
    top: 278,
    left: 151,
  },
  login1: {
    width: 53,
  },
  login: {
    left: 171,
    top: 680,
    position: "absolute",
  },
  signUp2: {
    width: 79,
  },
  signUp1: {
    top: 635,
    left: 158,
    position: "absolute",
  },
  signUpChild: {
    top: 308,
  },
  age: {
    top: 539,
    left: 188,
    width: 40,
    position: "absolute",
  },
  signUpItem: {
    top: 569,
    left: 78,
  },
  password: {
    top: 365,
    left: 155,
  },
  signUpInner: {
    top: 395,
  },
  rewritePassword: {
    top: 452,
    left: 123,
    width: 180,
    position: "absolute",
  },
  rectangleTextinput: {
    top: 482,
  },
  signUp: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SignUp;

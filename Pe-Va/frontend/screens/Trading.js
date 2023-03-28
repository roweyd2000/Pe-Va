import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableHighlight,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import BottomBar from "./BottomBar";
import TradingBlock from "./TradingBlock";
const Trading = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.trading}>
      <Text style={[styles.peVa, styles.peVaPosition]}>Pe-Va</Text>
      <TouchableHighlight
        style={[styles.signInSqure, styles.peVaPosition]}
        underlayColor="#fc0202"
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/sign-in-squre.png")}
        />
      </TouchableHighlight>
      
      <TradingBlock/>
      
     
      <BottomBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  peVaPosition: {
    top: 21,
    position: "absolute",
  },
  peVa: {
    left: 18,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.lobsterTwoRegular,
    color: Color.red,
    textAlign: "left",
    width: 113,
    height: 40,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  signInSqure: {
    left: 326,
    width: 47,
    height: 44,
  },
  trading: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Trading;

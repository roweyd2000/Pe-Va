import * as React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const BottomBar = () => {
  const navigation = useNavigation();

  return (
   <>
      <View style={styles.bottombarChild} />
      <TouchableHighlight
        style={styles.shopLight}
        underlayColor="#f20000"
        onPress={() => navigation.navigate("Stores")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/shop-light.png")}
        />
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.verticalSwitchLight, styles.lightPosition]}
        underlayColor="#ff0000"
        onPress={() => navigation.navigate("Trading")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/vertical-switch-light.png")}
        />
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.bookOpenAltLight}
        underlayColor="#fc0000"
        onPress={() => navigation.navigate("Posts")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/book-open-alt-light.png")}
        />
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.flaskAltLight, styles.lightPosition]}
        underlayColor="#ff0000"
        onPress={() => navigation.navigate("DIY")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/flask-alt-light.png")}
        />
      </TouchableHighlight>
      </>
  );
};

const styles = StyleSheet.create({
  lightPosition: {
    top: 771,
    position: "absolute",
  },
  bottombarChild: {
    marginTop: 343,
    top: "50%",
    left: 1,
    borderRadius: 11,
    borderStyle: "solid",
    borderColor: "#d40b0b",
    borderWidth: 6,
    width: 390,
    height: 79,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  shopLight: {
    left: 194,
    top: 774,
    width: 75,
    height: 63,
    position: "absolute",
  },
  verticalSwitchLight: {
    left: 19,
    width: 85,
    height: 69,
  },
  bookOpenAltLight: {
    left: 289,
    top: 772,
    width: 76,
    height: 71,
    position: "absolute",
  },
  flaskAltLight: {
    left: 99,
    width: 82,
    height: 64,
  },
  bottombar: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default BottomBar;

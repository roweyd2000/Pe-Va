import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableHighlight,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import BottomBar from "./BottomBar";
import DiyBlock from "./DiyBlock";
const DIY = () => {
  const navigation = useNavigation();

  const [ChosenTaste, setChosenTaste] = React.useState("");

  const Taste=[{name:"Phoenix",brand:"A&L",taste:"Pineapple",description:"300ml base 50/50 1 arome Rest for at least 5 days"},{name:"Green",brand:"Full Moon",taste:"Pineapple",description:"150ml base 50/50 1 arome Rest for at least 5 days"},{name:"Oni",brand:"A&L",taste:"Lime",description:"500ml base 50/50 1 arome Rest for at least 5 days"}]
 

  return (
    <View style={styles.diy}>
      
      <Text style={[styles.peVa, styles.peVaTypo, styles.peVaPosition]}>
        Pe-Va
      </Text>
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
      <Text style={[styles.diy1, styles.diyPosition, styles.peVaTypo]}>
        DIY
      </Text>
      <TextInput
        style={[styles.diyChild, styles.diyPosition]}
        placeholder="Type the taste you want"
        keyboardType="default"
        value={ChosenTaste}
        onChangeText={(text) => setChosenTaste(text)}
      />
      <Image
        style={[styles.searchLightIcon, styles.diyPosition]}
        resizeMode="cover"
        source={require("../assets/search-light.png")}
      />

{Taste
  .filter((item) => item.taste === ChosenTaste)
  .map((item) => (
    <DiyBlock key={item.name} Eliquide={item} />
  ))}
    
      
     
      
      
      <BottomBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  peVaTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lobsterTwoRegular,
  },
  peVaPosition: {
    top: 21,
    position: "absolute",
  },
  diyPosition: {
    top: 103,
    position: "absolute",
  },
  peVa: {
    left: 18,
    fontSize: FontSize.size_xl,
    color: Color.red,
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
  diy1: {
    left: 23,
    fontSize: FontSize.size_lg,
    color: Color.black,
    width: 62,
    height: 50,
  },
  diyChild: {
    left: 85,
    borderRadius: Border.br_md,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 282,
    height: 39,
  },
  searchLightIcon: {
    left: 329,
    width: 24,
    height: 34,
  },
  diy: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default DIY;

import * as React from "react";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableHighlight,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import BottomBar from "./BottomBar";
import StoreBlock from "./StoreBlock";

const Stores = () => {
  const [rectangleDropdownOpen, setRectangleDropdownOpen] = useState(false);
  const [rectangleDropdownValue, setRectangleDropdownValue] = useState("");
  const [rectangleDropdownItems, setRectangleDropdownItems] = useState([
    { value: "Ariana", label: "Ariana" },
    { value: "Manouba", label: "Manouba" },
    { value: "Bardo", label: "Bardo" },
    { value: "Sfax", label: "Sfax" },
  ]);

 const store=[{name:"lol",place:"Ariana"},{name:"Mvape",place:"Manouba"},{name:"Pro-vape",place:"Bardo"},{name:"l-vape",place:"Bardo"}]
  const navigation = useNavigation();

  const handleDropdownChange = (item) => {
    setRectangleDropdownValue(item.value);
    
    console.log(`Selected value: ${item.value}`);
  };
  return (
    <View style={styles.stores}>
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
      <View style={styles.wrapper}>
        <DropDownPicker
          style={styles.dropdownpicker}
          open={rectangleDropdownOpen}
          setOpen={setRectangleDropdownOpen}
          value={rectangleDropdownValue}
          setValue={setRectangleDropdownValue}
          placeholder="Choose a place"
          items={rectangleDropdownItems}
          dropDownContainerStyle={styles.rectangleDropdowndropDownContainer}
          onChangeItem={handleDropdownChange}
        />
      </View>
      <Image
        style={styles.pinAltIcon}
        resizeMode="cover"
        source={require("../assets/pin-alt.png")}
      />
    
      {store
  .filter((item) => item.place === rectangleDropdownValue)
  .map((item) => (
    <StoreBlock key={item.name} store={item.name} />
  ))}

      
      <BottomBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleDropdowndropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
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
  dropdownpicker: {
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "solid",
    
  },
  wrapper: {
    top: 93,
    left: 46,
    borderRadius: Border.br_md,
    width: 299,
    height: 39,
    borderStyle: "solid",
    position: "absolute",
    zIndex: 1,
  },
  pinAltIcon: {
    top: 83,
    left: 0,
    width: 45,
    height: 45,
    position: "absolute",
  },
  stores: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Stores;

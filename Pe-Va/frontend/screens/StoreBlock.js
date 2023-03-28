import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Border, Color, FontSize, FontFamily,Margin} from "../GlobalStyles";

const StoreBlock = (props) => {
  return (
    
          <View style={styles.StoreBlockContainer} >
      <View style={styles.storeblockChild} />
      <Text style={styles.store}> {props.store}</Text>
      </View>
       
    
  );
};

const styles = StyleSheet.create({
  storeblockChild: {
    top: 182,
    left: 40,
    borderRadius: Border.br_md,
    backgroundColor: Color.gainsboro,
    width: 309,
    height: 57,
   
  },
  
  store: {
    top: 130,
    left: 88,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.lobsterTwoRegular,
    color: Color.white,
    textAlign: "left",
    width: 180,
    height: 35,
   
  },
  storeblock: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default StoreBlock;

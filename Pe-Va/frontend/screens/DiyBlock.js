import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border, Margin } from "../GlobalStyles";

const DiyBlock = (props) => {
  return (
    
    <View >
      <View style={styles.diyblockChild} >
      <Text
        style={[styles.mlBase50501Container, styles.base50501ContainerTypo]}
      >
        <Text style={styles.mlBase5050}>{props.Eliquide.description}</Text>
        
      </Text>
      <Text style={[styles.phoenix, styles.phoenixTypo]}>{props.Eliquide.name}</Text>
      <Text style={[styles.al, styles.alPosition]}>{props.Eliquide.brand}</Text>
      </View>
      </View>
      
   
  );
};

const styles = StyleSheet.create({
  base50501ContainerTypo: {
    height: 102,
    width: 246,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.lobsterTwoRegular,
    fontSize: FontSize.size_sm,
    
  },
  
  phoenixTypo: {
    width: 280,
    fontSize: FontSize.size_lg,
    left: 51,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.lobsterTwoRegular,
   
  },
  alPosition: {
    width: 220,
    top: -124,
    fontSize: FontSize.size_lg,
    left: 51,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.lobsterTwoRegular,
   
  },
  diyblockChild: {
    
    left: 23,
    borderRadius: Border.br_md,
    backgroundColor: Color.gainsboro,
    width: 309,
    height: 178,
    top: 183,
    
  },
  mlBase5050: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },

  mlBase50501Container: {
    top: 80,
    left: 58,
  },
  phoenix: {
    top: -60,
    height: 35,
  },
  al: {
    height: 41,
  },
  
  diyblock: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default DiyBlock;

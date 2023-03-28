import * as React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { FontFamily, FontSize, Border, Color, Margin } from "../GlobalStyles";

const PostBlock = (props) => {
  return (
    
      <View style={styles.postBlockContainer}>
      <View style={styles.postblockChild} />
      <Text
        style={[
          styles.udhazjdDziajzidazdeazdeazdDa,
          styles.textTypo,
          styles.textTypo1,
        ]}
      >
        <Text style={styles.udhazjd}>
          <Text style={styles.udhazjd1}>{props.data.description} </Text>
        </Text>
        

      </Text>
      <Text style={[styles.userName, styles.userNameLayout, styles.textTypo]}>
        {" "}
       {props.data.title}
      </Text>
      <Text
        style={[styles.text, styles.textTypo, styles.textTypo1]}
        numberOfLines={1}
      >
        {props.data.Likes}
      </Text>
      
      <Image
        style={styles.happyLightIcon}
        resizeMode="cover"
        source={require("../assets/happy-light.png")}
      />
      <Image
        style={[styles.sadLightIcon, styles.userNameLayout]}
        resizeMode="cover"
        source={require("../assets/sad-light.png")}
      />
      </View>
    
  );
};


const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lobsterTwoRegular,
  },
  textTypo1: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.lobsterTwoRegular,
  },
  userNameLayout: {
    height: 35,
  },
  postBlockContainer: {
    marginBottom: Margin.m_md, 
  },
  postblockChild: {
    top: 161,
    left: 40,
    borderRadius: Border.br_md,
    backgroundColor: Color.gainsboro,
    width: 309,
    height: 328,
    position: "absolute",
  },
  udhazjd1: {
    color: Color.white,
  },
  udhazjd: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLine1: {
    color: Color.black,
  },
  blankLine2: {
    margin: Margin.m_md,
  },
  udhazjdDziajzidazdeazdeazdDa: {
    top: 280,
    left: 77,
    width: 246,
    height: 227,
    
  },
  userName: {
    top: 5,
    left: 88,
    fontSize: FontSize.size_lg,
    width: 180,
    color: Color.white,
    
  },
  text: {
    top: -70,
    left: 285,
    width: 57,
    height: 25,
    color: Color.white,
    
  },
  happyLightIcon: {
    top: 149,
    left: 265,
    width: 35,
    height: 33,
    
    
  },
  sadLightIcon: {
    top: 115,
    left: 306,
    width: 36,
  },
  postblock: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    
  },


});

export default PostBlock;




import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontFamily, Border, Color, Margin, FontSize } from "../GlobalStyles";

const TradingBlock = () => {
  return (
    
    <View style={styles.postBlockContainer}>
      <View style={styles.tradingblockChild} >
      <Text
        style={[styles.udhazjdDziajzidazdeazdeazdDa, styles.productNameTypo]}
      >
        <Text style={styles.udhazjd}>
          <Text style={styles.udhazjd1}>udhazjd</Text>
        </Text>
        <Text style={styles.udhazjd}>
          <Text style={styles.udhazjd1}>dziajzidazdeazdeazd dazsjnakz,</Text>
        </Text>
        <Text style={styles.udhazjd}>
          <Text style={styles.udhazjd1}>{`azdkjazdjiazhodhazjdjlzaldj `}</Text>
        </Text>
        <Text style={styles.udhazjd}>
          <Text style={styles.udhazjd1}>adjuhazdiazjd</Text>
        </Text>
        <Text style={styles.udhazjd}>
          <Text style={styles.udhazjd1}>zadkjazdkkdjbndl</Text>
        </Text>
        <Text style={styles.udhazjd}>
          <Text style={styles.udhazjd1}>azkdazkjdnkjnazk</Text>
        </Text>
        <Text style={styles.udhazjd}>
          <Text style={styles.blankLine1}> </Text>
        </Text>
        <Text style={styles.udhazjd}>
          <Text style={styles.udhazjd1}>user name:Lol</Text>
        </Text>
        <Text style={styles.num23000000}>
          <Text style={styles.udhazjd1}>num:23 000 000</Text>
        </Text>
      </Text>
      <Text style={[styles.productName, styles.productNameTypo]}>
        Product name
      </Text>
      </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  productNameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lobsterTwoRegular,
   
  },
  postBlockContainer: {
    marginBottom: Margin.m_md, 
  },
  tradingblockChild: {
    top: 80,
    left: 40,
    borderRadius: Border.br_md,
    backgroundColor: Color.gainsboro,
    width: 309,
    height: 328,
    
  },
  udhazjd1: {
    color: Color.white,
  },
  udhazjd: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLine1: {
    color: Color.white,
  },
  num23000000: {
    margin: Margin.m_md,
  },
  udhazjdDziajzidazdeazdeazdDa: {
    top: 100,
    left: 29,
    fontSize: FontSize.size_sm,
    width: 246,
    height: 227,
  },
  productName: {
    top: -183,
    left: 29,
    fontSize: FontSize.size_lg,
    width: 180,
    height: 35,
    color: Color.white,
  },
  tradingblock: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default TradingBlock;

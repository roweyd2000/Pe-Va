import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableHighlight,
  View,
  FlatList
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import BottomBar from "./BottomBar";
import PostBlock from "./PostBlock";
import axios from "axios";

const Posts = () => {
  const navigation = useNavigation();


  const [data, setData] = React.useState([]);


  React.useEffect(() => {
    axios.get("http://localhost:3000/Posts")
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  

  return (
    <View style={styles.posts}>
      <Text style={[styles.peVa, styles.peVaPosition, styles.peVaTypo]}>
        Pe-Va
      </Text>
      
      <Pressable
        style={[styles.signInSqure, styles.peVaPosition]}
        android_ripple={{ color: "#fc0202" }}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/sign-in-squre.png")}
        />
      </Pressable>
    
     
     {data.map((item)=>(<PostBlock style={{ marginTop: 20 }} data={item}  key={item.title}/>))} 
      
      
      
      
      <BottomBar/>

    </View>
  );
};

const styles = StyleSheet.create({
  peVaPosition: {
    height: 44,
    top: 21,
    position: "absolute",
  },
  peVaTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lobsterTwoRegular,
  },
  peVa: {
    left: 18,
    fontSize: FontSize.size_xl,
    color: Color.red,
    width: 113,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  signInSqure: {
    left: 326,
    width: 47,
  },
  text: {
    top: 152,
    left: 282,
    fontSize: FontSize.size_sm,
    color: Color.white,
    width: 57,
    height: 25,
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.lobsterTwoRegular,
  },
  posts: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Posts;

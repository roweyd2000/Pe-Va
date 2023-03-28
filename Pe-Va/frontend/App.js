const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import DIY from "./screens/DIY";
import Stores from "./screens/Stores";
import Trading from "./screens/Trading";
import SignUp from "./screens/SignUp";
import PostBlock from "./screens/PostBlock";
import DiyBlock from "./screens/DiyBlock";
import StoreBlock from "./screens/StoreBlock";
import TradingBlock from "./screens/TradingBlock";
import BottomBar from "./screens/BottomBar";
import Posts from "./screens/Posts";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Lobster Two": require("./assets/fonts/Lobster_Two.ttf"),
    "Lobster Two_regular": require("./assets/fonts/Lobster_Two_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DIY"
              component={DIY}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Stores"
              component={Stores}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Trading"
              component={Trading}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PostBlock"
              component={PostBlock}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DiyBlock"
              component={DiyBlock}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StoreBlock"
              component={StoreBlock}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TradingBlock"
              component={TradingBlock}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BottomBar"
              component={BottomBar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Posts"
              component={Posts}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

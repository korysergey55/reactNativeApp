import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";

import Login from "../../components/login/Login";
const { width: diwiceWidth, height: diwiceHeight } = Dimensions.get("screen");

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/heroImage.jpg")}
        style={styles.image}
        resizeMode="cover"
      />
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    position: "absolute",
    width: diwiceWidth,
    height: diwiceHeight,
  },
});

export default LoginScreen;

import React from "react";

import { StyleSheet, View, Image, Dimensions } from "react-native";

import SignUp from "../../components/signUp/signUp";

const { width: diwiceWidth, height: diwiceHeight } = Dimensions.get("screen");

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/heroImage.jpg")}
        style={styles.image}
        resizeMode="cover"
      />
      <SignUp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  image: {
    position: "absolute",
    width: diwiceWidth,
    height: diwiceHeight,
  },
});

export default RegistrationScreen;

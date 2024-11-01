import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import UserProfile from "../../components/userProfile/UserProfile";
const { width: diwiceWidth, height: diwiceHeight } = Dimensions.get("screen");

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <Image
        source={require("../../assets/images/heroImage.jpg")}
        style={styles.image}
        resizeMode="cover"
      />
      <UserProfile />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 32,
    textAlign: "center",
    color: "black",
  },
  image: {
    position: "absolute",
    width: diwiceWidth,
    height: diwiceHeight,
  },
});

export default ProfileScreen;

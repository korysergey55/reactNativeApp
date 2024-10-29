import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "../../assets/styles/globalStyles";
import CreatePublication from "../../components/createPublication/CreatePublication";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <CreatePublication />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: colors.bgColor,
  },
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 32,
    textAlign: "center",
    color: "black",
  },
});

export default CreatePostsScreen;

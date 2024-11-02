import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../assets/styles/globalStyles";
import UserComments from "../../components/userComments/UserComments";

const CommentsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserComments />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.bgColor,
  },
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 32,
    textAlign: "center",
    color: "black",
  },
});

export default CommentsScreen;

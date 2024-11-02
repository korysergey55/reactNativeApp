import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const CommentsScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>CommentsScreen</Text>
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
});

export default CommentsScreen;

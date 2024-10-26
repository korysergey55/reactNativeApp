import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CommentsScreen = () => {
  return (
    <View>
      <Text style={styles.title}>CommentsScreen</Text>
    </View>
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

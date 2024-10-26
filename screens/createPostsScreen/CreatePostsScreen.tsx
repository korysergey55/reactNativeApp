import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CreatePostsScreen = () => {
  return (
    <View>
      <Text style={styles.title}>CreatePostsScreen</Text>
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

export default CreatePostsScreen;

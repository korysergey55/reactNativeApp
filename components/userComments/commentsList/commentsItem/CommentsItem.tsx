import React, { FC } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { conmmentTypes } from "../../../../types/types";

type propTypes = {
  item: conmmentTypes;
};

const CommentsItem: FC<propTypes> = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}></View>
      <View style={styles.wripper}>
        <Text style={styles.comment}>{item.comment}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  avatar: {},
  wripper: {},
  comment: {},
  date: {},
});

export default CommentsItem;

import React, { FC } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { conmmentTypes } from "../../../types/types";
import CommentsItem from "./commentsItem/CommentsItem";

type propTypes = {
  commentsList: conmmentTypes[];
};

const CommentsList: FC<propTypes> = ({ commentsList }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {commentsList.map((item, index) => (
        <CommentsItem
          key={index}
          item={item}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    alignItems: "center",
    justifyContent: "flex-start",
    gap: 24,
  },
});

export default CommentsList;

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { colors } from "../../assets/styles/globalStyles";
import CommentsList from "./commentsList/CommentsList";

const UserComments = () => {
  const { navigate } = useNavigation();
  const {
    params: { commentItemData },
  } = useRoute();

  console.log(commentItemData);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={commentItemData?.source ? commentItemData.source : ""}
      />
      <Text style={styles.title}>{commentItemData?.title ? commentItemData?.title : ""}</Text>
      {commentItemData?.comments && <CommentsList commentsList={commentItemData?.comments} />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    alignItems: "center",
    justifyContent: "flex-start",

    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  image: { width: "100%", minWidth: 30, borderRadius: 8 },
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 19,

    marginTop: 8,
    marginBottom: 20,
    color: colors.primaryTextColor,
  },
});
export default UserComments;

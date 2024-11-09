import React from "react";
import { StyleSheet, Text, View } from "react-native";

import UserAvatar from "../../components/userAvatar/UserAvatar";
import PublicationList from "../../components/publicationList/publicationList";
import { colors } from "../../assets/styles/globalStyles";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userWripper}>
        <UserAvatar button={false} />
        <View style={styles.textWripper}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <PublicationList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    marginBottom: 10,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,

    backgroundColor: colors.bgColor,
  },
  userWripper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,

    marginBottom: 20,
  },
  textWripper: {},
  userName: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 15,
    color: colors.primaryTextColor,
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 15,
    color: "rgba(33, 33, 33, 0.8),",
  },
});

export default PostsScreen;

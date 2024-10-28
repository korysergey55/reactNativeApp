import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import UserAvatar from "../../components/userAvatar/UserAvatar";

import PublicationItem from "../../components/publicationItem/PublicationItem";
import { colors } from "../../assets/styles/globalStyles";

const PostsScreen = () => {
  // const [posts, setPost] = useState();
  const posts = [
    {
      title: "1111",
      comments: 5,
      likes: 5,
      location: "string",
      source: require("../../assets/images/avatar.png"),
    },
    {
      title: "2222",
      comments: 7,
      likes: 7,
      location: "string",
      source: require("../../assets/images/avatar.png"),
    },
    {
      title: "3333",
      comments: 7,
      likes: 7,
      location: "string",
      source: require("../../assets/images/avatar.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.userWripper}>
        <UserAvatar button={false} />
        <View style={styles.textWripper}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <ScrollView>
        {posts.map((post, index) => {
          return <PublicationItem item={post} />;
        })}
      </ScrollView>
      {/* <FlatList
        data={posts}
        renderItem={({ item }) => <PublicationItem item={item} />}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: colors.bgColor,
  },
  userWripper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,

    marginTop: 32,
  },
  textWripper: {},
  userName: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    fontWeight: 700,
    lineHeight: 15,
    color: colors.primaryTextColor,
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    fontWeight: 400,
    lineHeight: 15,
    color: "rgba(33, 33, 33, 0.8),",
  },
});

export default PostsScreen;

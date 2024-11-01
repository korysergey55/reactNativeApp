import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import UserAvatar from "../userAvatar/UserAvatar";
import LogoutButton from "../logoutButton/LogoutButton";
import PublicationList from "../publicationList/publicationList";

import { colors } from "../../assets/styles/globalStyles";
const { width: diwiceWidth, height: diwiceHeight } = Dimensions.get("screen");

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <UserAvatar
        outerStyles={styles.outerAvatarStyles}
        button={true}
      />
      <LogoutButton outerStyles={styles.logoutButton} />
      <Text style={styles.title}>User Name</Text>
      <PublicationList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: diwiceHeight,

    marginTop: 103,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 22,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: colors.bgColor,
  },
  logoutButton: {
    marginLeft: "auto",
    marginRight: 0,
  },
  title: {
    marginTop: 46,

    fontFamily: "Roboto-Regular",
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    color: colors.primaryTextColor,
  },
  outerAvatarStyles: {
    position: "absolute",
    top: "-7%",
    right: "40%",
    zIndex: 10,
  },
});

export default UserProfile;

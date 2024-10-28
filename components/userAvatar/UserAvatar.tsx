import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewProps } from "react-native";

import AvatarIconSvg from "../avatarIcon/AvatarIcon";

type Props = {
  outerStyles?: ViewProps["style"];
  button: boolean;
};

const UserAvatar: React.FC<Props> = ({ outerStyles, button = false }) => {
  const [imageData, setImageData] = useState("");
  return (
    <View style={[styles.imageContainer, outerStyles]}>
      <Image
        source={require("../../assets/images/avatar.png")}
        style={styles.image}
      />
      {button && (
        <TouchableOpacity style={styles.button}>
          <AvatarIconSvg />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  button: {
    position: "absolute",
    bottom: "20%",
    right: "-10%",
    zIndex: 11,
  },
});

export default UserAvatar;

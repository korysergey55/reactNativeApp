import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { conmmentTypes, postItemType } from "../../types/types";

import CommentIcon from "../../iconsComponents/postItemIcons/CommentIcon";
import LikeIcon from "../../iconsComponents/postItemIcons/LikeIcon";
import LocationIcon from "../../iconsComponents/postItemIcons/LocationIcon";

import { colors } from "../../assets/styles/globalStyles";

type propsTypes = {
  item: postItemType;
};

const PublicationItem: FC<propsTypes> = ({ item }) => {
  const { navigate } = useNavigation<any>();
  const { source, title, likes, comments, location } = item;

  const setLocation = () => {
    navigate("Map", { imageLocation: { latitude: 37.78825, longitude: -122.4324 } });
  };

  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.image}
        source={source}
      />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.wripper}>
        <View style={styles.commentsWripper}>
          <TouchableOpacity
            onPress={() => {
              navigate("Comments", {
                commentItemData: item,
              });
            }}
          >
            <CommentIcon />
          </TouchableOpacity>
          <Text style={styles.comments}>{comments?.length ? comments.length : 0}</Text>
        </View>
        <View style={styles.likesWripper}>
          <TouchableOpacity>
            <LikeIcon />
          </TouchableOpacity>
          <Text style={styles.likes}>{likes ? likes : 0}</Text>
        </View>
        <TouchableOpacity
          style={styles.locationWripper}
          onPress={setLocation}
        >
          <LocationIcon />
          <Text style={styles.location}>{location ? location : "No location"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: { width: "100%" },
  image: { width: "100%", minWidth: 30, borderRadius: 8 },
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,

    marginTop: 8,
    color: colors.primaryTextColor,
  },
  wripper: {
    flexDirection: "row",
    marginTop: 8,
  },
  commentsWripper: { flexDirection: "row", gap: 6 },
  comments: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    color: colors.primaryTextColor,
  },
  likesWripper: { flexDirection: "row", gap: 6, marginLeft: 24 },
  likes: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    color: colors.primaryTextColor,
  },
  locationWripper: { flexDirection: "row", gap: 6, marginLeft: "auto", marginRight: 0 },
  location: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    textDecorationLine: "underline",

    color: colors.primaryTextColor,
  },
});

export default PublicationItem;
